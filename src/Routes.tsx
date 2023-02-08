import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Kanban } from './pages/Kanban'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kanban" element={<Kanban />} />
    </Routes>
  )
}
