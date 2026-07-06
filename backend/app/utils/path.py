from pathlib import Path

# ==========================================================
# Project Root
# ==========================================================

PROJECT_ROOT = Path(__file__).resolve().parents[3]

# ==========================================================
# Backend Root
# ==========================================================

BACKEND_ROOT = PROJECT_ROOT / "backend"

# ==========================================================
# Dataset Directories
# ==========================================================

DATASET_DIR = PROJECT_ROOT / "datasets"

RAW_DATASET = DATASET_DIR / "raw"

PROCESSED_DATASET = DATASET_DIR / "processed"

FINAL_DATASET = DATASET_DIR / "final"
# ==========================================================
# Processed Dataset
# ==========================================================

PROCESSED_DATASET_PATH = PROCESSED_DATASET / "cleaned_customer_data.csv"
PROCESSED_DATASET_PATH = (
    PROCESSED_DATASET / "cleaned_customer_data.csv"
)

# ==========================================================
# Saved Models Directory
# ==========================================================

MODEL_DIR = BACKEND_ROOT / "saved_models"

# ==========================================================
# Production Model Files
# ==========================================================

MODEL_PATH = MODEL_DIR / "customerpulse_catboost.pkl"

FEATURE_PATH = MODEL_DIR / "feature_names.pkl"

SCALER_PATH = MODEL_DIR / "scaler.pkl"

METADATA_PATH = MODEL_DIR / "model_metadata.json"

METRICS_PATH = MODEL_DIR / "model_metrics.json"