from app.ai.prompt_builder import PromptBuilder
from app.ai.gemini_service import GeminiService


class AIManager:

    def __init__(self):

        self.prompt_builder = PromptBuilder()

        self.gemini = GeminiService()

    def generate_customer_report(self, context):

        prompt = self.prompt_builder.build_customer_prompt(
            context
        )

        report = self.gemini.generate(prompt)

        return report

    def generate_email(self, context):

        prompt = self.prompt_builder.build_email_prompt(
            context
        )

        email = self.gemini.generate(prompt)

        return email

    def generate_call_script(self, context):

        prompt = self.prompt_builder.build_call_prompt(
            context
        )

        script = self.gemini.generate(prompt)

        return script

    def generate_executive_summary(self, context):

        prompt = self.prompt_builder.build_executive_prompt(
            context
        )

        summary = self.gemini.generate(prompt)

        return summary