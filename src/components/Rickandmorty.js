import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//fetch: es una función que nos permite hacer peticiones a una API
const Rickandmorty = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results));
  }

  return (
    <div className="container">
      <h1 className="text-primary">Yoni Edilzar Escobar Bautista</h1>
      <h2 className="text-danger"> Consumiendo una Api</h2>
      <div className="row">
        {personajes.map((personaje) => (
          <div className="col my-3" key={personaje.id}>
            <>
              <div className="card">
                <img
                  className="shadow bg-body rounded rounded-circle"
                  src={personaje.image}
                  alt=" "
                />
                <div className="card-body">
                  <h5 className="card-title">{personaje.name}</h5>
                  <p className="card-text">
                    {personaje.status}
                    <br />
                    {personaje.species}
                    <br />
                    {personaje.gender}
                    <br />
                    <strong>Location: </strong>
                    {personaje.location.name}
                    <br />
                  </p>
                </div>
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rickandmorty;
