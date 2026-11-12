from fastapi import FastAPI
from app.db.base import Base
from app.db.session import engine
from app.models import Producto

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Tienda Solar API", version="0.1.0")


@app.get("/")
def root():
    return {"status": "ok", "service": "tienda-solar-api"}