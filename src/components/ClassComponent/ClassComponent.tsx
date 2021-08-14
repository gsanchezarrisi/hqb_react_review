import React from 'react';

export type ClassComponentProps = {
    primerNumero: number | undefined;
    segundoNumero: number | undefined;
};

class ClassComponent extends React.Component<ClassComponentProps, any> {

    sumar(a: number | undefined, b: number | undefined) {
        const _a: number = (!!a) ? a : 0;
        const _b: number = (!!b) ? b : 0;
        return _a + _b;
    };

    render() {
      return (
      <div>
            <h4 style={{width: '100%', textAlign: 'center'}}>COMPONENTE DE CLASE</h4>
            <hr/>
            <p>A continuación se muestra el resultado de la suma de los valores <b style={{color:"#24248f"}}>{this.props.primerNumero || 0}</b> con <b style={{color:"#24248f"}}>{this.props.segundoNumero || 0}</b>
            </p>
            <h1 style={{justifyContent: 'center', display: 'flex'}}>Resultado</h1> 
            <div style={{fontSize: '100px', color: "#24248f", justifyContent: 'center', display: 'flex', fontWeight: 'bold'}}>
              {this.sumar(this.props.primerNumero, this.props.segundoNumero)}
            </div>
      </div>);
    };
};

export default ClassComponent;