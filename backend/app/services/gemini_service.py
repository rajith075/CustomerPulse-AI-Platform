import os
import json
import time

from dotenv import load_dotenv
from google import genai
from google.genai import types


class GeminiService:

    def __init__(self):

        load_dotenv()

        api_key = os.getenv("GEMINI_API_KEY")

        if not api_key:
            raise ValueError(
                "GEMINI_API_KEY not found."
            )

        self.client = genai.Client(api_key=api_key)

        # Production Models
        self.primary_model = "gemini-2.5-flash"

        self.fallback_model = "gemini-2.0-flash"

        self.max_retries = 3

    def _call_model(self, model, prompt):

        response = self.client.models.generate_content(

            model=model,

            contents=prompt,

            config=types.GenerateContentConfig(

                temperature=0.3,

                response_mime_type="application/json"

            )

        )

        return response.text

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

                    print(f"Attempt {attempt+1}")

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