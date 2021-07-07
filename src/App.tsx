import React from 'react';
import PerfilDesarrollador from './components/perfilDesarrollador/PerfilDesarrollador';

const App = () => {
  return (
    <div className="App">
      <PerfilDesarrollador 
        nombre="Gabriel Sánchez" 
        edad={30}
        tienePantalla={false}
        />
    </div>
  );
}

export default App;
