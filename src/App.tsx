import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App = () => {

  const [estado, setEstado] = React.useState<boolean>(true);

  const handleEstado = () => {
      setEstado(!estado);
  };

  const _renderActions = (): JSX.Element => {
      const _btnSalida: JSX.Element = <button className="btn btn-danger btn-action" onClick={handleEstado}>Salir</button>;
      const _btnEntrada: JSX.Element = <button className="btn btn-primary btn-action" onClick={handleEstado}>Entrar</button>;
      
      return (estado) ? _btnSalida : _btnEntrada;
  };

  const _renderHeader = (): JSX.Element => {
      const _mensaje = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus, consequuntur";
      const _headerBienvenida: JSX.Element = <Header title={"Bienvenido"} message={_mensaje} variant={'welcome'}/>;
      const _headerDespedida: JSX.Element = <Header title={"Adios"} message={_mensaje} variant={'bye'}/>;

      return (estado) ? _headerBienvenida : _headerDespedida;
  };

  return (
    <div className="App">
      <Navbar actions={_renderActions()}/>
      <div className="m-4">
        {_renderHeader()}
      </div>
    </div>
  );
};

export default App;
