import React, { createContext, useState, useEffect } from 'react';

// crear el context
export const RecetasContext = createContext();

// crear el provider, aqui se encuentran las funciones y state
const RecetasProvider = (props) => {

  return (
    <RecetasContext.Provider value={{ }}>
      {props.children}
    </RecetasContext.Provider>
  );
};
export default RecetasProvider;
