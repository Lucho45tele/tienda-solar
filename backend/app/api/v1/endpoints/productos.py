from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.producto import Producto

router = APIRouter()


@router.get("")
def listar_productos(db: Session = Depends(get_db)):
    return db.query(Producto).all()
