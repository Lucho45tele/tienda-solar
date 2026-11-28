import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { obtenerProducto } from '../api/productos'

export default function ProductoDetallePage() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    setProducto(null)
    obtenerProducto(id)
      .then(setProducto)
      .catch(e => setError(e.message))
  }, [id])

  if (error) return (
    <div>
      <Link to="/" className="text-blue-600 hover:underline text-sm">
        ← Volver al catálogo
      </Link>
      <p className="bg-red-100 text-red-700 p-4 rounded mt-4">Error: {error}</p>
    </div>
  )
  if (!producto) return <p className="text-gray-500">Cargando...</p>

  return (
    <div>
      <Link to="/" className="text-blue-600 hover:underline text-sm">
        ← Volver al catálogo
      </Link>
      <div className="mt-4 bg-white rounded-lg shadow p-8">
        <div className="text-6xl mb-4">☀️</div>
        <h1 className="text-3xl font-bold text-gray-900">{producto.nombre}</h1>
        {producto.modelo && (
          <p className="text-gray-500 mt-1">Modelo: {producto.modelo}</p>
        )}
        <p className="text-3xl font-bold text-gray-900 mt-4">${producto.precio}</p>
        {producto.descripcion && (
          <p className="text-gray-700 mt-6 leading-relaxed">{producto.descripcion}</p>
        )}
      </div>
    </div>
  )
}
