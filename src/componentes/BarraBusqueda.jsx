import React from "react";

const BarraBusqueda = () => {
  const divStyle = {
    backgroundColor: "violet",
    padding: "20px",
  };

  return (
    <div style={divStyle}>
      <input type="text" placeholder="Ingrese tarea para buscar..." />
      <input type="checkbox" />
      <label>
         Hecha
      </label>
    </div>
  );
};
export default BarraBusqueda