"""
==========================================================
CustomerPulse AI
Executive Dashboard AI Service
==========================================================
"""

from app.prompts.executive_dashboard_prompt import (
    ExecutiveDashboardPrompt,
)

from app.services.gemini_service import GeminiService


class DashboardAIService:

    _gemini = GeminiService()

    @classmethod
    def generate(cls, dashboard: dict):

        print()

        print("🧠 Generating Executive AI...")

        prompt = ExecutiveDashboardPrompt.build(
            dashboard
        )

        result = cls._gemini.generate(prompt)

        if result["success"]:

            print(
                f"✅ Gemini ({result['model']}) "
                f"{result['response_time']} sec"
            )

            return result["data"]

        print("❌ Executive AI Failed")

        return {

            "headline":
                "Executive AI Unavailable",

            "overall_status":
                "Unknown",

            "priority":
                "Low",

            "executive_score":
                0,

            "executive_summary":
                "Unable to generate executive insights.",

            "key_insights": [],

            "business_risks": [],

            "growth_opportunities": [],

            "recommended_actions": [],

            "next_week_focus": [],

            "financial_outlook":
                "Unknown",

            "confidence":
                "Low",

        }