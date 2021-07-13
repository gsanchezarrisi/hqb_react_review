type PerfilDesarrolladorProps = {
    nombre: string,
    edad: number,
    tienePantalla?: boolean,
};

const PerfilDesarrollador = (props: PerfilDesarrolladorProps) => {
    
    function convertTienePantalla(tienePantalla: boolean | undefined): string {
        return (tienePantalla) ? "Si tiene pantalla" : "No tiene pantalla";
    };

    return(
        <ol type="A">
            <li>Mi nombre es: {props.nombre}</li>
            <li>Mi edad es: {props.edad} Años</li>
            <li>Estado Monitor: {convertTienePantalla(props.tienePantalla)}</li>
        </ol>
    );

};

export default PerfilDesarrollador;