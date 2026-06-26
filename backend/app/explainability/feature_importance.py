import pandas as pd


class FeatureImportance:

    def get_top_features(
        self,
        shap_values,
        customer_df,
        top_n=5
    ):

        importance = pd.DataFrame({

            "Feature": customer_df.columns,

            "SHAP Value": shap_values[0]

        })

        importance["Absolute"] = importance[
            "SHAP Value"
        ].abs()

        importance = importance.sort_values(

            by="Absolute",

            ascending=False

        )

        return importance.head(top_n)