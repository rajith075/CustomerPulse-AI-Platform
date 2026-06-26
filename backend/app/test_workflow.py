from pprint import pprint

from app.workflows.customer_analysis_workflow import CustomerAnalysisWorkflow

workflow = CustomerAnalysisWorkflow()

customer = {

    "Age":45,

    "Gender":"Male",

    "Tenure":20,

    "Usage Frequency":6,

    "Support Calls":7,

    "Payment Delay":15,

    "Subscription Type":"Premium",

    "Contract Length":"Monthly",

    "Total Spend":850,

    "Last Interaction":18

}

result = workflow.analyze(customer)

print()

print("="*80)

print("CUSTOMERPULSE AI REPORT")

print("="*80)

print()

pprint(result)