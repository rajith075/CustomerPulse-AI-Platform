class EmailFormatter:

    @staticmethod
    def format(ai_report):

        return {

            "subject":

                "Customer Retention Plan",

            "body":

                ai_report.get(

                    "customer_email",

                    ""

                )

        }