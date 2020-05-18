import React from 'react';
import CategoriasProvider from './context/CategoriasContext';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <CategoriasProvider>
      <Header titulo="Recetas de Cocktails" />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriasProvider>
  );
}

export default App;
