import React, { useContext } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {
  // uso del context
  const { categorias } = useContext(CategoriasContext);
  // console.log(categorias);

  return (
    <form className="col-12">
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
          />
        </div>

        <div className="col-md-4">
          <select name="categoria" className="form-control">
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
