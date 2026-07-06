"""
==========================================================
CustomerPulse AI
Schema Mapping Prompt
==========================================================
"""

from app.config.model_schema import REQUIRED_FEATURES


class SchemaMappingPrompt:

    @staticmethod
    def build(columns: list[str]) -> str:

        return f"""
You are a Senior Data Engineer.

Your task is to map uploaded dataset columns to the standard CustomerPulse AI schema.

Uploaded Dataset Columns

{columns}

----------------------------------------------------------

CustomerPulse Standard Schema

{REQUIRED_FEATURES}

----------------------------------------------------------

Instructions

1. Map every uploaded column to ONE standard column.

2. If no suitable mapping exists, return null.

3. Never invent columns.

4. Return ONLY valid JSON.

Example

{{
    "Customer Age":"Age",

    "Customer Gender":"Gender",

    "Revenue":"Total Spend",

    "Support Tickets":"Support Calls",

    "Random Field":null
}}
"""