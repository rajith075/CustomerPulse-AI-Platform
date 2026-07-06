"""
==========================================================
CustomerPulse AI
AI Column Mapper
==========================================================
"""

from app.prompts.schema_mapping_prompt import SchemaMappingPrompt
from app.services.gemini_service import GeminiService


class ColumnMapper:

    def __init__(self):

        self.gemini = GeminiService()

    def map_columns(self, columns: list[str]):

        prompt = SchemaMappingPrompt.build(columns)

        mapping = self.gemini.generate_json(prompt)

        return mapping