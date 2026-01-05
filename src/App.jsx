import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navigation from "./assets/components/Navigation";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import Gallery from "./assets/pages/Gallery";
import Favorites from "./assets/pages/Favorites";
import { AppProvider } from "./assets/contexts/AppProvider";
import { useContext, useEffect } from "react";
import "./App.css"
import { backgroundContext } from "./assets/contexts/BackgroundContext";

function Layout() {
  
  const { backgroundStyle} = useContext(backgroundContext);

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
