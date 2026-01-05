import Background1 from "../Backgrounds/Background1.jpg";
import Background2 from "../Backgrounds/Background2.jpg";
import Background3 from "../Backgrounds/Background3.jpg";
import Background4 from "../Backgrounds/Background4.jpg";
import Background5 from "../Backgrounds/Background5.jpg";
import Background6 from "../Backgrounds/Background6.jpg";
import Background7 from "../Backgrounds/Background7.jpg";
import Background8 from "../Backgrounds/Background8.jpg";
import Background9 from "../Backgrounds/Background9.jpg";
import Background10 from "../Backgrounds/Background10.jpg";
import Background11 from "../Backgrounds/Background11.jpg";
import Background12 from "../Backgrounds/Background12.jpg";
import { createContext, useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const backgroundContext = createContext({});

export function BackgroundContextProvider({ children }) {

  const location = useLocation();
  const [currentBackground, setCurrentBackground] = useState(0);
  const galleryBackgrounds = [
    Background1,
    Background2,
    Background3,
    Background4,
    Background5,
    Background6,
    Background7,
    Background8,
    Background9,
    Background10,
    Background11,
    Background12,
  ];
  const homeBackgrounds = ["#0e0e0e", "#ffffff"]

  const backgroundStyle = useMemo(() => {
    if (location.pathname === "/gallery" || location.pathname === "/favorites") {
      const bgImage = galleryBackgrounds[currentBackground % galleryBackgrounds.length];
      return {
          backgroundImage: `linear-gradient(135deg, rgba(102, 126, 234, 0.5) 0%, rgba(118, 75, 162, 0.5) 100%), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
      }
    } else if (location.pathname === "/" || location.pathname === "/settings") {
      return {
          backgroundColor: homeBackgrounds[currentBackground % homeBackgrounds.length],
      }
    }
  }, [location.pathname, currentBackground]);

  useEffect(() => {
    setCurrentBackground(0)
  }, [location.pathname])

  function changeBackground() {
    setCurrentBackground((prev) => (prev + 1) % homeBackgrounds.length);
  }

  return (
    <backgroundContext.Provider
      value={{ backgroundStyle, changeBackground}}
    >
      {children}
    </backgroundContext.Provider>
  );
}
