type FunctionalComponentProps = {
    primerNumero: number | undefined;
    segundoNumero: number | undefined;
};

const FunctionalComponent = (props: FunctionalComponentProps) => {

    function sumar(a: number | undefined, b: number | undefined) {
        const _a: number = (!!a) ? a : 0;
        const _b: number = (!!b) ? b : 0;
        return _a + _b;
    };

    return (
    <div>
        <h4 style={{width: '100%', textAlign: 'center'}}>COMPONENTE DE FUNCIÓN</h4>
        <hr/>
        <p>A continuación se muestra el resultado de la suma de los valores <b style={{color:"#cc0000"}}>{props.primerNumero || 0}</b> con <b style={{color:"#cc0000"}}>{props.segundoNumero || 0}</b>
        </p>
        <h1 style={{justifyContent: 'center', display: 'flex'}}>Resultado</h1> 
        <div style={{fontSize: '100px', color: "#cc0000", justifyContent: 'center', display: 'flex', fontWeight: 'bold'}}>
            {sumar(props.primerNumero, props.segundoNumero)}
        </div>
    </div>);
};

export default FunctionalComponent;