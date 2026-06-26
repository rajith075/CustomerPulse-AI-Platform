from fastapi import FastAPI

app = FastAPI(
    title="CustomerPulse AI",
    description="AI Powered Customer Churn Prevention Platform",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Welcome to CustomerPulse AI 🚀"
    }

@app.get("/health")
def health():
    return {
        "status": "Healthy",
        "backend": "Running",
        "version": "1.0.0"
    }