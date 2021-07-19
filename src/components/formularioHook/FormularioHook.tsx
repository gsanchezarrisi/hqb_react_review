import React from 'react';
import './FormularioHook.css';

const FormularioHook = () => {

    const [userName, setUserName] = React.useState<string>("gabriel.sanchez");
    const [nombre, setNombre] = React.useState<string>("Gabriel");
    const [apellido, setApellido] = React.useState<string>("Sánchez");
    const [estado, setEstado] = React.useState<boolean>(false);

    function handlerNombre(event: React.ChangeEvent<HTMLInputElement>) {
        setNombre(event.target.value);
    };

    function handlerApellido(event: React.ChangeEvent<HTMLInputElement>) {
        setApellido(event.target.value);
    };

    function handlerEstado(event: React.ChangeEvent<HTMLSelectElement>) {
        setEstado((event.target.value === "true"))
    };

    function handlerOnSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert((estado) ? "El Username está Activo" : "El Username está Inactivo");
    };

    return (
        <form className="container" onSubmit={handlerOnSubmit}>
            <div className="row justify-content-md-center align-items-center">
                <div className="card align-middle">
                    <div className="row">
                        <div className="col-lg-2">
                            <label htmlFor="txtUsername" className="form-label">
                                Username:
                            </label>
                        </div>
                        <div className="col-lg-10">
                            <input 
                                disabled
                                type="text" 
                                name="txtUsername"
                                placeholder="Username"
                                className="form-control"
                                value={userName}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <label htmlFor="txtNombre" className="form-label">
                                Nombre:
                            </label>
                        </div>
                        <div className="col-lg-4">
                            <input 
                                required 
                                type="text" 
                                name="txtNombre"
                                placeholder="Nombre"
                                className="form-control"
                                value={nombre}
                                onChange={handlerNombre}
                            />
                        </div>
                        <div className="col-lg-2">
                            <label htmlFor="txtApellido" className="form-label">
                                Apellido:
                            </label>
                        </div>
                        <div className="col-lg-4">
                            <input 
                                required 
                                type="text" 
                                name="txtApellido"
                                placeholder="Apellido"
                                className="form-control"
                                value={apellido}
                                onChange={handlerApellido}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <label htmlFor="txtEstado" className="form-label">
                                Estado:
                            </label>
                        </div>
                        <div className="col-lg-10">
                            <select 
                                name="selEstado" 
                                className="form-select"
                                onChange={handlerEstado}
                                value={(estado) ? "true" : "false"}
                            >
                                <option value="true">Activo</option>
                                <option value="false">Inactivo</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex flex-row-reverse bd-highlight">
                                <button type="submit" className="btn btn-primary mb-2">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormularioHook;
