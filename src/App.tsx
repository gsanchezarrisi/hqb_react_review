import React from 'react';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import './App.css';

const App = () => {

  const [firstNumber, setFirstNumber] = React.useState<number | undefined>(undefined);
  const [secondNumber, setSecondNumber] = React.useState<number | undefined>(undefined);

  function handlerFirstNumberOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstNumber(Number(event.target.value));
  };

  function handlerSecondNumberOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSecondNumber(Number(event.target.value));
  };

  const _renderInputs = () => (
    <div className="inputs">
          <label>Ingrese el primer número</label>
          <div className="flex-center-input">
            <input
            type="number"
            value={firstNumber} 
            onChange={handlerFirstNumberOnChange}/>
          </div>
          <label>Ingrese el segundo número</label>
          <div className="flex-center-input">
            <input
            type="number"
            value={secondNumber}
            onChange={handlerSecondNumberOnChange} />
          </div>
      </div>
  );


  return (
    <div className="App">
      <section className="sectionForm">
        <div className="title">
          <h1>TAREA SEMANA 06 - COMPONENTES DE CLASE Y FUNCIONALES</h1>
        </div>
        {_renderInputs()}
      </section>
      <div className="sections">
        <section className="sectionClass">
          <ClassComponent 
          primerNumero={firstNumber} 
          segundoNumero={secondNumber}/>
        </section>
        <section className="sectionFunct">
          <FunctionalComponent 
          primerNumero={firstNumber} 
          segundoNumero={secondNumber}/>
        </section>
      </div>
     
    </div>
  );
}

export default App;
