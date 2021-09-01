import React from 'react';
import RandomNumberForm from "../forms/RandomNumberForm"
import { NumberRequest } from '../requests/NumberRequest';

const RandomNumberPage = () => {

    const [inputValue, setInputValue] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);

    function handlerOnSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        setLoading(true);

        NumberRequest(inputValue)
            .then((response) => {
                alert(response);
            })
            .catch((error) => {
                alert(error);
            })
            .finally(() => {
                setLoading(false);
            }); 
    };

    function handlerInputValueChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setInputValue(event.target.value);
    };


    return (
        <div className={'container mt-3'} style={{height: '100vh', backgroundColor: 'white'}}>
            <h1 style={{textAlign: 'center'}}>Adivina el número!</h1>
            <p>
                En este juego, debes intentar adivinar el número mágico en el que esta pensando el sistema, para ello debes considerar las siguientes reglas:
            </p>
            <ul title={'Instrucciones'}>
                <li>Debes ingresar sólo valores numéricos</li>
                <li>Debes ingresar números del 1 al 10</li>
            </ul>
            <p>
                Si aciertas, se enviará un mensaje indicando que ganaste, de lo contrario te indicará que perdiste y te mostrará el valor que pensaba el sistema.
            </p>
            <RandomNumberForm
            loading={loading}
            onInputValueChange={handlerInputValueChange} 
            onSubmit={handlerOnSubmit} />
        </div>);
};

export default RandomNumberPage;