import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Favorites from "./pages/Favorites";
import { AppProvider } from "./contexts/AppProvider";
import { useContext, useEffect } from "react";
import "./App.css"
import { backgroundContext } from "./contexts/BackgroundContext";

function Layout() {
  
  const { backgroundStyle } = useContext(backgroundContext);

  return (
    <div className="app" style={backgroundStyle}>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
