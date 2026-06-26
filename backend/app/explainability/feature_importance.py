import numpy as np
import pandas as pd


class FeatureImportance:

    @staticmethod
    def rank(

        feature_names,

        shap_values,

        top_k=5

    ):

        """
        Rank the most important features based on
        absolute SHAP values.

        Compatible with both:
        • SHAP ndarray output
        • SHAP list output (older versions)
        """

        # ------------------------------------------
        # Handle different SHAP output formats
        # ------------------------------------------

        if isinstance(shap_values, list):

            values = np.abs(shap_values[0])

        else:

            values = np.abs(shap_values)

        # SHAP may return shape (1, n_features)

        if len(values.shape) > 1:

            values = values[0]

        # ------------------------------------------
        # Build Feature Importance DataFrame
        # ------------------------------------------

        df = pd.DataFrame({

            "feature": feature_names,

            "importance": values

        })

        df = df.sort_values(

            by="importance",

            ascending=False

        )

        return df.head(top_k).reset_index(

            drop=True

        )