import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Header titulo="Recetas de Cocktails" />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
