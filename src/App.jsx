import { Routes, Route, NavLink, Navigate, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Favorites from './pages/Favorites'
import Settings from './pages/Settings'

function Layout() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App