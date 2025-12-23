import { Routes, Route, NavLink, Navigate, Outlet, useLocation } from "react-router-dom"
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Favorites from './pages/Favorites'
import Settings from './pages/Settings'

function Layout() {
  const location = useLocation();
  return (
    <div className='app'>
      <header className='nav'>
        <nav>
          <NavLink to='/' end className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to='/gallery' className={({isActive}) => (isActive ? "active" : "")}>Gallery</NavLink>
          <NavLink to='/favorites' className={({isActive}) => (isActive ? "active" : "")}>Favorites</NavLink>
          <NavLink to='/settings' className={({isActive}) => (isActive ? "active" : "")}>Settings</NavLink>
        </nav>
        <span>Сейчас: {location.pathname}</span>
      </header>
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