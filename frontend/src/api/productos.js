import { api } from './client'

export async function listarProductos() {
  const { data } = await api.get('/productos')
  return data
}

export async function obtenerProducto(id) {
  const { data } = await api.get(`/productos/${id}`)
  return data
}
