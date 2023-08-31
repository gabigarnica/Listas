import React from "react";
import BarraBusqueda from "./componentes/BarraBusqueda";

const App = () => {
  const pageStyle = {
    backgroundImage: "url(/imagen.jpg)",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={pageStyle}>
      <BarraBusqueda />
    </div>
  );
};

export default App;
