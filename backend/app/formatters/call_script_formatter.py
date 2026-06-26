class CallScriptFormatter:

    @staticmethod
    def format(ai_report):

        return {

            "script":

                ai_report.get(

                    "call_script",

                    ""

                )

        }