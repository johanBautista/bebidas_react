import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
  //
  const [busqueda, guardarBusqueda] = useState({
    nombre: '',
    categoria: '',
  });

  // context par obtener categorias
  const { categorias } = useContext(CategoriasContext);
  // context obtener
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  // obtener datos
  const obtenerDatosReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend>BUSCA CATEGORIA O INGREDIENTE</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            placeholder="Buscar por Ingrediente"
            type="text"
            onChange={obtenerDatosReceta}
          />
        </div>

        <div className="col-md-4">
          <select
            name="categoria"
            className="form-control"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Seleccione Categoria</option>

            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="BUSCAR"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
