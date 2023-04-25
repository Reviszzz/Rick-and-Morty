import React, { useState } from "react";

function BuscarPersonaje() {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");

  function buscarPersonaje() {
    fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el estado del componente con el nombre y la imagen del personaje
        setNombre(data.results[0].name);
        setImagen(data.results[0].image);
      });
  }

  return (
    <div className="container">
      <div className="d-flex my-4">
        <input
          className="form-control"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button className="btn btn-outline-info mx-2" onClick={buscarPersonaje}>
          Buscar
        </button>
      </div>
      <div className="row container">
        <div className=" col-sm-4 container d-flex justify-content-center align-items-center my-4">
          <h3 className="text-center p-5">{nombre}</h3>
          {imagen && <img className="img-fluid rounded-pill" src={imagen} />}
        </div>
      </div>
    </div>
  );
}

export default BuscarPersonaje;
