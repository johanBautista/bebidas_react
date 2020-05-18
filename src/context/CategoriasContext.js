import React, { createContext, useState } from 'react';

// crear el context
export const CategoriasContext = createContext();

// crear el provider, aqui se encuentran las funciones y state
const CategoriasProvider = (props) => {
  // crear el state del context
  const [categorias, guardarCategorias] = useState('hola desde state');

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};
export default CategoriasProvider;
