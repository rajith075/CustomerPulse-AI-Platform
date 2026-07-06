import traceback

import joblib
import pandas as pd

from app.utils.path import (
    MODEL_PATH,
    FEATURE_PATH,
)

# ==========================================================
# Intelligence Engines
# ==========================================================

from app.intelligence.health_engine import HealthEngine
from app.intelligence.revenue_engine import RevenueEngine
from app.intelligence.confidence_engine import ConfidenceEngine
from app.intelligence.customer_tier_engine import CustomerTierEngine
from app.intelligence.risk_engine import RiskEngine
from app.intelligence.recommendation_engine import RecommendationEngine


class PredictionService:

    REQUIRED_COLUMNS = [
        "Support Calls",
        "Payment Delay",
        "Usage Frequency",
        "Tenure",
        "Subscription Type",
        "Contract Length",
        "Total Spend",
    ]

    def __init__(self):

        print("🚀 Loading Production Model...")

        self.model = joblib.load(MODEL_PATH)
        self.feature_names = joblib.load(FEATURE_PATH)

        print("✅ Production Model Loaded")

    # =====================================================
    # Feature Engineering
    # =====================================================

    def preprocess(self, customer: dict):

        df = pd.DataFrame([customer])

        df = pd.get_dummies(
            df,
            drop_first=True,
        )

        df = df.reindex(
            columns=self.feature_names,
            fill_value=0,
        )

        return df

    def prepare_features(self, customer: dict):

        return self.preprocess(customer)

    # =====================================================
    # Validation
    # =====================================================

    def validate_customer(self, customer: dict):

        missing = []

        for column in self.REQUIRED_COLUMNS:

            if column not in customer:

                missing.append(column)

        if missing:

            raise KeyError(
                f"Missing customer fields: {missing}"
            )

    # =====================================================
    # Prediction
    # =====================================================

    def predict(self, customer: dict):

        try:

            self.validate_customer(customer)

            processed = self.prepare_features(customer)

            prediction = int(
                self.model.predict(processed)[0]
            )

            probability = float(
                self.model.predict_proba(processed)[0][1]
            )

            churn_percentage = round(
                probability * 100,
                2,
            )

            prediction_label = (
                "Likely to Churn"
                if prediction == 1
                else "Not Likely to Churn"
            )

            # ==========================================
            # Business Intelligence
            # ==========================================

            health = HealthEngine.calculate(

                support_calls=customer["Support Calls"],

                payment_delay=customer["Payment Delay"],

                usage_frequency=customer["Usage Frequency"],

                tenure=customer["Tenure"],

                churn_percentage=churn_percentage,

                subscription_type=customer["Subscription Type"],

                contract_length=customer["Contract Length"],

            )

            revenue = RevenueEngine.calculate(

                customer=customer,

                churn_probability=probability,

            )

            confidence = ConfidenceEngine.calculate(
                probability
            )

            tier = CustomerTierEngine.calculate(
                customer["Total Spend"]
            )

            risk = RiskEngine.calculate(

                churn_percentage=churn_percentage,

                health_score=health["customer_health"],

                revenue_at_risk=revenue["revenue_at_risk"],

            )

            recommendation = RecommendationEngine.calculate(

                risk_level=risk["risk_level"],

                subscription=customer["Subscription Type"],

            )

            return {

                "prediction": prediction,

                "prediction_label": prediction_label,

                "churn_probability": round(probability, 4),

                "churn_percentage": churn_percentage,

                **health,

                **revenue,

                **confidence,

                **tier,

                **risk,

                **recommendation,

            }

        except Exception as e:

            print("\n" + "=" * 70)
            print("❌ Prediction Failed")
            print("=" * 70)

            print("\nCustomer Data:")

            for key, value in customer.items():
                print(f"{key}: {value}")

            print("\nException:")
            print(type(e).__name__)
            print(e)

            print("\nTraceback:")
            traceback.print_exc()

            print("=" * 70 + "\n")

            raise