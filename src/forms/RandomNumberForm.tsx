import React from "react";
import ProgressBar from "../components/ProgressBar";

export type RandomNumberFormProps = {
    onSubmit?: Function;
    onInputValueChange?: Function;
    loading?: boolean;
};

const RandomNumberForm = (props: RandomNumberFormProps) => {

    function handlerOnSubmit(event: React.FormEvent<HTMLFormElement>) {
        if(props.onSubmit){
            props.onSubmit(event);
        }
    };

    function handlerOnInputValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        if(props.onInputValueChange){
            props.onInputValueChange(event);
        }
    };

    return(
        <form className={'row'} onSubmit={handlerOnSubmit}>
            <div className={'px-3'}>
                <div className={'row'}>
                    <label
                    className={'form-label'} 
                    htmlFor={'numberInput'}>
                        <b className={'fs-3'}>
                            Ingrese un número (1 al 10)
                        </b>
                    </label>
                </div>
                <div className={'row'}>
                    <input
                    disabled={props.loading}
                    className={'form-control form-control-lg'}
                    name={'numberInput'}
                    onChange={handlerOnInputValueChange}/>
                </div>
                {
                    (props.loading) &&
                    <div className={'row mt-2'}>
                        <ProgressBar continuous={props.loading}/>
                    </div>
                }
                <div className={'d-grid gap-2 col-6 mx-auto mt-3'}>
                    <button
                    disabled={props.loading}
                    className={'btn btn-primary'}
                    type={'submit'}>
                        {(props.loading) ? 'Porfavor espere...' : "Obtener Número"}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default RandomNumberForm;