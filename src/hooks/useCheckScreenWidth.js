import { useEffect, useState } from "react";

export default function useCheckScreenWidth() {
  const [screen, setScreen] = useState({
    isMobile: false,
    isTablet: false,
    width: window.innerWidth,
  });

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setScreen({
        isMobile: width <= 768,
        isTablet: width <= 1060,
        width,
      });
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return screen;
}
