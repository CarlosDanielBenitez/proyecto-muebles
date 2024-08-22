import { useState, useEffect } from "react";

const useSlider = (initialIndex, images) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  // Podriamos crear la función goToIndex para permitir que el índice cambie manualmente si alguna vez necesitamos esa funcionalidad en el futuro.
  useEffect(() => {
    const interval = setInterval(() => {
      // Avanzar al siguiente índice
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 90000); // Cambiar de imagen cada 9 segundos

    return () => clearInterval(interval); // Limpiar el temporizador al desmontar el componente
  }, [currentIndex, images.length]);

  return { currentIndex };
};

export default useSlider;
