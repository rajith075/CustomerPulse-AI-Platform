from pprint import pprint
import pandas as pd

from app.explainability.shap_engine import ShapEngine
from app.explainability.feature_importance import FeatureImportance
from app.explainability.explanation_builder import ExplanationBuilder

customer = {

    "Age":45,

    "Tenure":20,

    "Usage Frequency":6,

    "Support Calls":7,

    "Payment Delay":15,

    "Total Spend":850,

    "Last Interaction":18,

    "Gender_Male":1,

    "Subscription Type_Premium":1,

    "Subscription Type_Standard":0,

    "Contract Length_Monthly":1,

    "Contract Length_Quarterly":0

}

df = pd.DataFrame([customer])

engine = ShapEngine()

shap_values = engine.explain(df)

importance = FeatureImportance.rank(

    df.columns,

    shap_values

)

report = ExplanationBuilder.build(

    importance

)

print()

print("="*80)

print("TOP FACTORS")

print("="*80)

print()

pprint(report)