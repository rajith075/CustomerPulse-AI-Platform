from app.prompts.consultant_prompt import ConsultantPrompt
from app.services.gemini_service import GeminiService
from app.validators.response_validator import ResponseValidator


class ConsultantService:

    def __init__(self):

        self.gemini = GeminiService()

    def generate(

        self,

        customer,

        prediction,

        business,

        explainability

    ):

        prompt = ConsultantPrompt.build(

            customer,

            prediction,

            business,

            explainability

        )

        print("\n" + "=" * 80)
        print("PROMPT SENT TO GEMINI")
        print("=" * 80)
        print(prompt)

        response = self.gemini.generate(prompt)

        print("\n" + "=" * 80)
        print("RAW GEMINI RESPONSE")
        print("=" * 80)
        print(response)

        validated = ResponseValidator.validate(response)

        print("\n" + "=" * 80)
        print("VALIDATED RESPONSE")
        print("=" * 80)
        print(validated)

        return validated