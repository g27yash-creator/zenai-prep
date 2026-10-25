from fastapi import FastAPI

app = FastAPI(
    title="ZenAI Prep API",
    description="Backend API for the ZenAI Prep exam preparation platform",
    version="0.1.0",
)


@app.get("/health/live", tags=["Health"])
def health_live():
    return {
        "status": "alive",
        "service": "zenai-prep-api",
    }


@app.get("/health/ready", tags=["Health"])
def health_ready():
    return {
        "status": "ready",
        "service": "zenai-prep-api",
    }
