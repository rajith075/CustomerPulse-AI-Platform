"""
==========================================================
CustomerPulse AI
Gemini Service
==========================================================
"""

import os
import json
import time

from dotenv import load_dotenv
from google import genai
from google.genai import types


class GeminiService:

    # ======================================================
    # Initialize Gemini Client
    # ======================================================

    def __init__(self):

        load_dotenv()

        api_key = os.getenv("GEMINI_API_KEY")

        if not api_key:

            raise ValueError(
                "GEMINI_API_KEY not found."
            )

        self.client = genai.Client(
            api_key=api_key
        )

        # Production Models

        self.primary_model = "gemini-2.5-flash"

        self.fallback_model = "gemini-2.0-flash"

        self.max_retries = 3

    # ======================================================
    # Call Gemini Model
    # ======================================================

    def _call_model(self, model, prompt):

        response = self.client.models.generate_content(

            model=model,

            contents=prompt,

            config=types.GenerateContentConfig(

    temperature=0,

    response_mime_type="application/json"

)

        )

        return response.text

    # ======================================================
    # Generate Response
    # ======================================================

    def generate(self, prompt):

        models = [

            self.primary_model,

            self.fallback_model

        ]

        for model in models:

            for attempt in range(self.max_retries):

                try:

                    start = time.time()

                    text = self._call_model(

                        model,

                        prompt

                    )

                    elapsed = round(

                        time.time() - start,

                        2

                    )

                    text = text.strip()

                    if text.startswith("```"):

                        text = (

                            text
                            .replace("```json", "")
                            .replace("```", "")
                            .strip()

                        )

                    return {

                        "success": True,

                        "model": model,

                        "response_time": elapsed,

                        "data": json.loads(text)

                    }

                except Exception as e:

                    error = str(e)

                    print()

                    print(
                        f"Attempt {attempt + 1}"
                    )

                    print(error)

                    if "503" in error:

                        wait = 2 ** attempt

                        print(

                            f"Retrying in {wait} seconds..."

                        )

                        time.sleep(wait)

                        continue

                    break

        return {

            "success": False,

            "error": "All Gemini models failed.",

            "data": None

        }

    # ======================================================
    # Generate JSON Only
    # ======================================================

    def generate_json(self, prompt):

        result = self.generate(prompt)

        if not result["success"]:

            raise RuntimeError(

                result["error"]

            )

        return result["data"]

    # ======================================================
    # Generate Full Result
    # ======================================================

    def generate_result(self, prompt):

        return self.generate(prompt)

    # ======================================================
    # Health Check
    # ======================================================

    def ping(self):

        try:

            self.generate_json(

                """
                Return ONLY valid JSON.

                {
                    "status":"ok"
                }
                """

            )

            return True

        except Exception:

            return False

    # ======================================================
    # Model Information
    # ======================================================

    def get_models(self):

        return {

            "primary": self.primary_model,

            "fallback": self.fallback_model,

            "max_retries": self.max_retries

        }