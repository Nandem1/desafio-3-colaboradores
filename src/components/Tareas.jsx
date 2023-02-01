import React, { useState } from "react";
import { tareasIniciales } from "../tareasIniciales";
import "bootstrap/dist/css/bootstrap.min.css";

const Tareas = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  const [email, setEmail] = useState("");
  const [listaTareas, setListaTareas] = useState(tareasIniciales);
  const [saveData, setSaveData] = useState(listaTareas);
  const [filter, setFilter] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    setListaTareas([...listaTareas, { nombre: nombreTarea, email: email }]);
    setSaveData([...listaTareas, { nombre: nombreTarea, email: email }])
    setNombreTarea("");
    setEmail("");
  };

  const capturaInputNombre = (e) => {
    setNombreTarea(e.target.value);
  };

  const capturaInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const dataFilter = (e) => {
    e.preventDefault();
    const resultado = saveData.filter((item) => {
      return item.nombre.toLowerCase() === filter.toLowerCase();
    });

    console.log(resultado);
    setListaTareas(resultado);
  };

  const renderColaboradores = () => {
    return listaTareas.map((tarea) => (
      <li key={tarea.nombre} onClick={() => console.log(tarea)}>
        {" "}
        {tarea.nombre} - {tarea.email}{" "}
      </li>
    ));
  };

  return (
    <div>
      <div>
        <nav class="navbar bg-dark bg-body-tertiary navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand">Base de datos colaboradores</a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setFilter(e.target.value)}
              />
              <button class="btn btn-outline-success" type="submit" onClick={dataFilter}>
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <form onSubmit={enviarFormulario} class="ms-3 mt-5 w-50">
        <label class="form-label">
          Nombre del colaborador
        </label>
        <input
          className="form-control"
          name="nombreTarea"
          onChange={capturaInputNombre}
          value={nombreTarea}
        />
        <label class="form-label mt-1">
          Correo del colaborador
        </label>
        <input
          className="form-control"
          name="nombreTarea"
          onChange={capturaInputEmail}
          value={email}
        />
        <button className="btn btn-primary mt-4">
          {" "}
          Agregar Colaboradores{" "}
        </button>
      </form>
      <div>
        <ul class="mt-3">{renderColaboradores()}</ul>
      </div>
    </div>
  );
};

export default Tareas;
