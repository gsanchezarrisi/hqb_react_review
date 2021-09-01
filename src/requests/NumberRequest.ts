export const NumberRequest = (userNumber: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(userNumber === '') {
                reject('Debes ingresar un valor');
            }

            if(Number.isNaN(Number(userNumber))) {
                reject('No es número');
            }

            const userInputNumber = Number(userNumber);

            fetch('https://qa.hqb.cl/NUMERO_RANDOM/api/numero')
            .then(response => response.json())
            .then(result => {

                const secretNumber = Number(result.valor);

                if(userInputNumber > 10 || userInputNumber < 1) {
                    reject('El número debe ser mayor a 1 y menor a 10');
                }
    
                if(userInputNumber !== secretNumber) {
                    reject(`No Acertaste, Vuelve a intentarlo! (Número secreto: ${secretNumber})`);
                }
    
                resolve('Felicitaciones Acertaste!');
            })
            .catch(error => {
                reject(`Error en la petición API (Salió el 5)`);
            });

        }, 5000)
    });
};