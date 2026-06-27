from functools import lru_cache

from app.workflows.customer_analysis_workflow import CustomerAnalysisWorkflow

from app.services.prediction_service import PredictionService

from app.services.analysis_service import AnalysisService

from app.explainability.explainability_service import ExplainabilityService

from app.services.consultant_service import ConsultantService


# ==========================================================
# Prediction Service
# ==========================================================

@lru_cache
def get_prediction_service():

    return PredictionService()


# ==========================================================
# Business Intelligence Service
# ==========================================================

@lru_cache
def get_analysis_service():

    return AnalysisService()


# ==========================================================
# Explainability Service
# ==========================================================

@lru_cache
def get_explainability_service():

    return ExplainabilityService()


# ==========================================================
# AI Consultant
# ==========================================================

@lru_cache
def get_consultant_service():

    return ConsultantService()


# ==========================================================
# Complete Customer Workflow
# ==========================================================

@lru_cache
def get_customer_workflow():

    return CustomerAnalysisWorkflow()