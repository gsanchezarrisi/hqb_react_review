import React from 'react';
import './FormularioListar.css';

type AreaDocumental = {
    id: number,
    nombre: string,
    estaActivo: boolean,
}

type TipoDocumento = {
    id: number,
    areaDocumental: AreaDocumental,
    codigo: string,
    padreId?: number | null,
    nombre: string,
    estaActivo: boolean
};

type ListItemProps = {
    tipoDocumento: TipoDocumento,
}

const ListItem = (props: ListItemProps) => {
    return(
        <li>
            {`Área Documental: ${props.tipoDocumento.areaDocumental.nombre} - Tipo Documento: ${props.tipoDocumento.nombre} - Código: ${props.tipoDocumento.codigo}`}
        </li>
    );
};

const FormularioListar = () => {

    const [loading, setLoading] = React.useState<boolean>(true);
    const [listaTipoDocumento, setListaTipoDocumento] = React.useState<TipoDocumento[]>([]);

    React.useEffect(() => {
        obtenerListado();
    }, []);

    function obtenerListado(){
        setLoading(true);
        const _listadoTipoDocumento: TipoDocumento[] = [
            { id: 39, areaDocumental: { id: 5, nombre: "Licencias Médicas", estaActivo: true }, codigo: "LIC", padreId: null, nombre: "Licencias Medicas", estaActivo: true, },
            { id: 40, areaDocumental: { id: 5, nombre: "Licencias Médicas", estaActivo: true }, codigo: "ADC", padreId: null, nombre: "Acreditaciones de renta", estaActivo: true, },
            { id: 41, areaDocumental: { id: 5, nombre: "Licencias Médicas", estaActivo: true }, codigo: "CDR", padreId: null, nombre: "Certificado de respaldo", estaActivo: true, },
            { id: 42, areaDocumental: { id: 5, nombre: "Licencias Médicas", estaActivo: true }, codigo: "RES", padreId: null, nombre: "Resolución", estaActivo: true, },
        ];
        setListaTipoDocumento(_listadoTipoDocumento);
        setLoading(false);
    };

    if(loading){
        return <div>Cargando...</div>;
    }
    else{
        return (
            <ul>
                {listaTipoDocumento.map((x: TipoDocumento, index: number) => (
                    <ListItem tipoDocumento={x}/>
                ))}
            </ul>
        );
    }

    
};

export default FormularioListar;