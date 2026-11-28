import { useEffect, useState } from 'react'
import { listarProductos } from '../api/productos'
import ProductoCard from '../components/ProductoCard'

export default function CatalogoPage() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    listarProductos()
      .then(setProductos)
      .catch(e => setError(e.message))
      .finally(() => setCargando(false))
  }, [])

  if (cargando) return <p className="text-gray-500">Cargando productos...</p>
  if (error) return (
    <p className="bg-red-100 text-red-700 p-4 rounded">Error: {error}</p>
  )
  if (productos.length === 0) return (
    <p className="text-gray-500">No hay productos todavía.</p>
  )

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Catálogo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map(p => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>
    </>
  )
}
