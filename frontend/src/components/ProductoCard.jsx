import { Link } from 'react-router-dom'

export default function ProductoCard({ producto }) {
  return (
    <Link
      to={`/productos/${producto.id}`}
      className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-5"
    >
      <div className="text-4xl mb-3">☀️</div>
      <h2 className="font-semibold text-lg text-gray-900">{producto.nombre}</h2>
      {producto.modelo && (
        <p className="text-sm text-gray-500 mt-1">{producto.modelo}</p>
      )}
      <p className="text-2xl font-bold text-gray-900 mt-4">${producto.precio}</p>
    </Link>
  )
}
