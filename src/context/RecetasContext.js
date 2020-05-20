import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// crear el context
export const RecetasContext = createContext();

// crear el provider, aqui se encuentran las funciones y state
const RecetasProvider = (props) => {
  // crear el state del context
  const [recetas, guardarRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    nombre:'',
    categoria:''
  })


  return (
    <RecetasContext.Provider value={{ buscarRecetas }}>
      {props.children}
    </RecetasContext.Provider>
  );
};
export default RecetasProvider;
