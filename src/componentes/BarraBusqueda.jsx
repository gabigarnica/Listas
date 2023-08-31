import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const BarraBusqueda = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formContainerStyle = {
    background: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingrese tarea para buscar..."
        />
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input" id="hechaCheck"/>
          <label className="form-check-label" htmlFor="hechaCheck">
            Tarea Hecha
          </label>
        </div>
        <select className="form-control">
          <option value="">Seleccionar por:</option>
          <option value="fecha">Fecha</option>
          <option value="nombre">Nombre</option>
          <option value="destacadas">Destacadas Recientemente</option>
        </select>
        <button className="btn" type="button" style={{
          backgroundColor: "crimson",
          color: "white",
          margin: "auto",
          marginTop: "10px",
          display: "block",
        }}> Buscar</button>
      </div>
    </div>
  );
};

export default BarraBusqueda;
