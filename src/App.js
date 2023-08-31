import React from "react";
import BarraBusqueda from "./componentes/BarraBusqueda";

const App = () => {
  const pageStyle = {
    backgroundColor: "darkviolet",
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
