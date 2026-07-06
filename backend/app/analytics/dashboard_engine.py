import pandas as pd

from app.intelligence.health_engine import HealthEngine
from app.intelligence.revenue_engine import RevenueEngine
from app.intelligence.risk_engine import RiskEngine


class DashboardEngine:

    @staticmethod
    def process(df: pd.DataFrame):

        print("🚀 Processing Dashboard Analytics...")

        total_customers = len(df)

        total_health = 0
        total_revenue_at_risk = 0

        # ==========================================
        # Risk Distribution
        # ==========================================

        low_risk = 0
        medium_risk = 0
        high_risk = 0
        critical_risk = 0

        # ==========================================
        # Customer Health
        # ==========================================

        healthy = 0
        moderate = 0
        health_at_risk = 0
        critical = 0

        # ==========================================
        # Customer Segmentation
        # ==========================================

        high_value = 0
        loyal = 0
        segment_at_risk = 0
        new = 0
        inactive = 0

        customers = df.to_dict("records")

        for customer in customers:

            # ==========================================
            # Dynamic Churn Source
            # ==========================================

            churn_probability = customer.get(

                "Churn Probability",

                customer.get("Churn", 0)

            )

            # ==========================================
            # Health
            # ==========================================

            health = HealthEngine.calculate(

                support_calls=customer["Support Calls"],

                payment_delay=customer["Payment Delay"],

                usage_frequency=customer["Usage Frequency"],

                tenure=customer["Tenure"],

                churn_percentage=churn_probability * 100,

                subscription_type=customer["Subscription Type"],

                contract_length=customer["Contract Length"]

            )

            # ==========================================
            # Revenue
            # ==========================================

            revenue = RevenueEngine.calculate(

                customer=customer,

                churn_probability=churn_probability

            )

            # ==========================================
            # Risk
            # ==========================================

            risk = RiskEngine.calculate(

                churn_percentage=churn_probability * 100,

                health_score=health["customer_health"],

                revenue_at_risk=revenue["revenue_at_risk"]

            )

            score = health["customer_health"]

            total_health += score

            total_revenue_at_risk += revenue["revenue_at_risk"]

            # ==========================================
            # Risk Counters
            # ==========================================

            risk_level = risk["risk_level"]

            if risk_level == "Low":

                low_risk += 1

            elif risk_level == "Medium":

                medium_risk += 1

            elif risk_level == "High":

                high_risk += 1

            else:

                critical_risk += 1

            # ==========================================
            # Health Counters
            # ==========================================

            if score >= 80:

                healthy += 1

            elif score >= 60:

                moderate += 1

            elif score >= 40:

                health_at_risk += 1

            else:

                critical += 1

            # ==========================================
            # Customer Segmentation
            # ==========================================

            if customer["Total Spend"] >= 7000 and score >= 80:

                high_value += 1

            elif customer["Tenure"] >= 24 and score >= 70:

                loyal += 1

            elif score < 60 or churn_probability >= 0.70:

                segment_at_risk += 1

            elif customer["Tenure"] <= 6:

                new += 1

            else:

                inactive += 1

        # ==========================================
        # Revenue Chart
        # ==========================================

        months = [

            "Jan",

            "Feb",

            "Mar",

            "Apr",

            "May",

            "Jun"

        ]

        revenue_chart = []

        chunk = max(1, total_customers // len(months))

        for i, month in enumerate(months):

            start = i * chunk

            end = (

                total_customers

                if i == len(months) - 1

                else (i + 1) * chunk

            )

            revenue = round(

                df.iloc[start:end]["Total Spend"].sum(),

                2

            )

            revenue_chart.append({

                "month": month,

                "revenue": revenue

            })

        # ==========================================
        # Average Health
        # ==========================================

        average_health = (

            round(total_health / total_customers, 1)

            if total_customers

            else 0

        )

        # ==========================================
        # Dashboard Response
        # ==========================================

        return {

            "kpis": {

                "total_customers": total_customers,

                "revenue_at_risk": round(

                    total_revenue_at_risk,

                    2

                ),

                "average_health_score": average_health,

                "high_risk_customers":

                    high_risk + critical_risk,

            },

            "revenue_chart": revenue_chart,

            "health": {

                "overall_score": average_health,

                "healthy": healthy,

                "moderate": moderate,

                "at_risk": health_at_risk,

                "critical": critical,

                "healthy_percentage":

                    round(

                        healthy / total_customers * 100,

                        1

                    ) if total_customers else 0,

                "moderate_percentage":

                    round(

                        moderate / total_customers * 100,

                        1

                    ) if total_customers else 0,

                "at_risk_percentage":

                    round(

                        health_at_risk / total_customers * 100,

                        1

                    ) if total_customers else 0,

                "critical_percentage":

                    round(

                        critical / total_customers * 100,

                        1

                    ) if total_customers else 0,

            },

            "customer_segmentation": {

                "total": total_customers,

                "segments": [

                    {

                        "name": "High Value",

                        "count": high_value,

                        "percentage":

                            round(

                                high_value / total_customers * 100,

                                1

                            ) if total_customers else 0,

                        "color": "#D9FF3F"

                    },

                    {

                        "name": "Loyal",

                        "count": loyal,

                        "percentage":

                            round(

                                loyal / total_customers * 100,

                                1

                            ) if total_customers else 0,

                        "color": "#3B82F6"

                    },

                    {

                        "name": "At Risk",

                        "count": segment_at_risk,

                        "percentage":

                            round(

                                segment_at_risk / total_customers * 100,

                                1

                            ) if total_customers else 0,

                        "color": "#F97316"

                    },

                    {

                        "name": "New",

                        "count": new,

                        "percentage":

                            round(

                                new / total_customers * 100,

                                1

                            ) if total_customers else 0,

                        "color": "#8B5CF6"

                    },

                    {

                        "name": "Inactive",

                        "count": inactive,

                        "percentage":

                            round(

                                inactive / total_customers * 100,

                                1

                            ) if total_customers else 0,

                        "color": "#EF4444"

                    }

                ]

            },

            "risk_distribution": [

                {

                    "level": "Low",

                    "customers": low_risk,

                    "percentage":

                        round(

                            low_risk / total_customers * 100,

                            1

                        ) if total_customers else 0

                },

                {

                    "level": "Medium",

                    "customers": medium_risk,

                    "percentage":

                        round(

                            medium_risk / total_customers * 100,

                            1

                        ) if total_customers else 0

                },

                {

                    "level": "High",

                    "customers": high_risk,

                    "percentage":

                        round(

                            high_risk / total_customers * 100,

                            1

                        ) if total_customers else 0

                },

                {

                    "level": "Critical",

                    "customers": critical_risk,

                    "percentage":

                        round(

                            critical_risk / total_customers * 100,

                            1

                        ) if total_customers else 0

                }

            ]

        }