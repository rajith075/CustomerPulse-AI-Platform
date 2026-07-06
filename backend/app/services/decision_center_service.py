"""
==========================================================
CustomerPulse AI
Decision Center Service
==========================================================
"""

from app.prompts.decision_center_prompt import (
    DecisionCenterPrompt,
)

from app.services.gemini_service import (
    GeminiService,
)


class DecisionCenterService:

    _gemini = GeminiService()

    @classmethod
    def generate(cls, dashboard: dict):

        print()
        print("🧠 Generating AI Decision Center...")

        try:

            prompt = DecisionCenterPrompt.build(
                dashboard
            )

            decisions = cls._gemini.generate_json(
                prompt
            )

            print("✅ Decision Center Generated")

            return decisions

        except Exception as e:

            print(f"❌ Decision Center Error: {e}")

            return {

                "actions": []

            }