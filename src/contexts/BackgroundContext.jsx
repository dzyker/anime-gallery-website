import Background1 from "../assets/Backgrounds/Background1.jpg";
import Background2 from "../assets/Backgrounds/Background2.jpg";
import Background3 from "../assets/Backgrounds/Background3.jpg";
import Background4 from "../assets/Backgrounds/Background4.jpg";
import Background5 from "../assets/Backgrounds/Background5.jpg";
import Background6 from "../assets/Backgrounds/Background6.jpg";
import Background7 from "../assets/Backgrounds/Background7.jpg";
import Background8 from "../assets/Backgrounds/Background8.jpg";
import Background9 from "../assets/Backgrounds/Background9.jpg";
import Background10 from "../assets/Backgrounds/Background10.jpg";
import Background11 from "../assets/Backgrounds/Background11.jpg";
import Background12 from "../assets/Backgrounds/Background12.jpg";
import { createContext, useState, useMemo } from "react";

export const backgroundContext = createContext({});

export function BackgroundContextProvider({ children }) {
  const [currentBackground, setCurrentBackground] = useState(0);
  const backgrounds = [
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

  const backgroundStyle = useMemo(() => {
    const bgIndex =
      currentBackground >= 0 && currentBackground < backgrounds.length
        ? currentBackground
        : 0;
    const bgImage = backgrounds[bgIndex];

    if (bgImage) {
      return {
        backgroundImage: `linear-gradient(135deg, rgba(102, 126, 234, 0.5) 0%, rgba(118, 75, 162, 0.5) 100%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      };
    }
    return {};
  }, [currentBackground]);

  function changeBackground() {
    setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
  }

  return (
    <backgroundContext.Provider
      value={{ backgroundStyle, currentBackground, changeBackground }}
    >
      {children}
    </backgroundContext.Provider>
  );
}
