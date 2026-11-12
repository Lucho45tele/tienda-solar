from sqlalchemy import Numeric, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Producto(Base):
    __tablename__ = "productos"

    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(120), nullable=False)
    descripcion: Mapped[str] = mapped_column(String(500), nullable=True)
    modelo:Mapped[str] = mapped_column(String(500), nullable=True)
    precio: Mapped[float] = mapped_column(Numeric(10, 2), nullable=False)
   