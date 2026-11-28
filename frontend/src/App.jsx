import { useEffect, useState } from 'react'
import { api } from './api/client'

export default function App() {
  const [productos, setProductos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get('/productos')
      .then(r => setProductos(r.data))
      .catch(e => setError(e.message))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Productos</h1>

      {error && (
        <p className="bg-red-100 text-red-700 p-4 rounded mb-4">
          Error: {error}
        </p>
      )}

      {!error && productos.length === 0 && (
        <p className="text-gray-500">No hay productos todavía.</p>
      )}

      <ul className="space-y-2">
        {productos.map(p => (
          <li key={p.id} className="bg-white p-4 rounded shadow">
            <span className="font-medium">{p.nombre}</span>
            {p.precio != null && (
              <span className="ml-3 text-gray-600">${p.precio}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}