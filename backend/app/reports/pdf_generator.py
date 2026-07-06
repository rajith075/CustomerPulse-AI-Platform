"""
==========================================================
CustomerPulse AI
Executive Report PDF Generator
==========================================================
"""

from io import BytesIO

from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.enums import TA_CENTER

from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)


class PDFGenerator:

    @staticmethod
    def generate(report):

        buffer = BytesIO()

        doc = SimpleDocTemplate(buffer)

        styles = getSampleStyleSheet()

        title_style = styles["Title"]
        title_style.alignment = TA_CENTER

        heading = styles["Heading2"]

        normal = styles["BodyText"]

        story = []

        # ======================================================
        # TITLE
        # ======================================================

        story.append(
            Paragraph(
                "CustomerPulse AI",
                title_style,
            )
        )

        story.append(
            Paragraph(
                "Executive Business Report",
                heading,
            )
        )

        story.append(Spacer(1, 25))

        # ======================================================
        # EXECUTIVE SUMMARY
        # ======================================================

        story.append(
            Paragraph(
                "Executive Summary",
                heading,
            )
        )

        story.append(
            Paragraph(
                report["executive_summary"]["executive_summary"],
                normal,
            )
        )

        story.append(Spacer(1, 20))

        # ======================================================
        # KPI OVERVIEW
        # ======================================================

        story.append(
            Paragraph(
                "Business KPI Overview",
                heading,
            )
        )

        kpis = report["kpis"]

        story.append(
            Paragraph(
                f"Total Customers : {kpis['total_customers']}",
                normal,
            )
        )

        story.append(
            Paragraph(
                f"Revenue At Risk : ${kpis['revenue_at_risk']:,.2f}",
                normal,
            )
        )

        story.append(
            Paragraph(
                f"Average Health Score : {kpis['average_health_score']}%",
                normal,
            )
        )

        story.append(
            Paragraph(
                f"High Risk Customers : {kpis['high_risk_customers']}",
                normal,
            )
        )

        story.append(Spacer(1, 20))

        # ======================================================
        # BUSINESS RISKS
        # ======================================================

        story.append(
            Paragraph(
                "Business Risks",
                heading,
            )
        )

        for risk in report["executive_summary"]["business_risks"]:

            story.append(
                Paragraph(
                    f"• {risk}",
                    normal,
                )
            )

        story.append(Spacer(1, 20))

        # ======================================================
        # GROWTH OPPORTUNITIES
        # ======================================================

        story.append(
            Paragraph(
                "Growth Opportunities",
                heading,
            )
        )

        for item in report["executive_summary"]["growth_opportunities"]:

            story.append(
                Paragraph(
                    f"• {item}",
                    normal,
                )
            )

        story.append(Spacer(1, 20))

        # ======================================================
        # RECOMMENDED ACTIONS
        # ======================================================

        story.append(
            Paragraph(
                "Recommended Actions",
                heading,
            )
        )

        for action in report["executive_summary"]["recommended_actions"]:

            story.append(
                Paragraph(
                    f"• {action}",
                    normal,
                )
            )

        doc.build(story)

        pdf = buffer.getvalue()

        buffer.close()

        return pdf