from fastapi import FastAPI

app = FastAPI(title="Tienda Solar API", version="0.1.0")


@app.get("/")
def root():
    return {"status": "ok", "service": "tienda-solar-api"}