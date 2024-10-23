import React, { Suspense, lazy, useState } from "react";
import Home from "./components/Home";

const lazyWithDelay = (importFunc, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(importFunc());
    }, delay);
  });
};

const About = lazy(() => lazyWithDelay(() => import("./components/About"), 4000));

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <Home />
      {/* Botón para mostrar el componente About */}
      <button onClick={() => setShowAbout(true)}>
        Cargar Acerca de nosotros
      </button>

      {/* Suspense muestra un mensaje mientras se carga el componente About */}
      <Suspense fallback={<div>Cargando...</div>}>
        {showAbout && <About />}
      </Suspense>
    </div>
  );
}

export default App;
