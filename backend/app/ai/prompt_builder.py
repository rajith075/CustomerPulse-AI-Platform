class PromptBuilder:

    def build_customer_prompt(self, context):

        return f"""
You are an expert AI Customer Success Consultant.

You MUST return ONLY valid JSON.

Do NOT write markdown.

Do NOT use ```.

Do NOT add explanations outside JSON.

Return exactly this JSON schema.

{{
"executive_summary":"",
"customer_behaviour_analysis":"",
"root_cause_analysis":"",
"business_impact":"",
"churn_risk_level":"",
"confidence_level":"",
"customer_strengths":[],
"customer_weaknesses":[],
"retention_strategy":"",
"expected_outcome":"",
"email":"",
"call_script":""
}}

Customer Information

{context}
"""