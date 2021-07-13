import React from 'react';
import PerfilDesarrollador from './components/perfilDesarrollador/PerfilDesarrollador';

const App = () => {
  return (
    <div className="App">
      <PerfilDesarrollador
        tienePantalla 
        nombre="Gabriel Sánchez" 
        edad={30}
      />
    </div>
  );
}

export default App;
