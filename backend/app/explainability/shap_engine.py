import joblib
import shap
import pandas as pd


class SHAPEngine:

    def __init__(self):

        self.model = joblib.load(
            "../../saved_models/customerpulse_catboost.pkl"
        )

        self.feature_names = joblib.load(
            "../../saved_models/feature_names.pkl"
        )

        self.explainer = shap.TreeExplainer(self.model)

    def explain(self, customer_df):

        shap_values = self.explainer.shap_values(customer_df)

        return shap_values