import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CatalogoPage from './pages/CatalogoPage'
import ProductoDetallePage from './pages/ProductoDetallePage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CatalogoPage />} />
        <Route path="/productos/:id" element={<ProductoDetallePage />} />
      </Route>
    </Routes>
  )
}
