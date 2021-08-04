import React from 'react';
import { Icon } from '@iconify/react';
import './LoginPage.scss';

const LoginPage = () => {

    const [userName, setUserName] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();

    const userNameInputRef = React.useRef<any>();
    const passwordInputRef = React.useRef<any>();

    const handlerUserNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handlerPasswordOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handlerOnSubmit = () => {
        if(!userName){
            userNameInputRef.current.focus();
            return;
        }
        else if(!password) {
            passwordInputRef.current.focus();
            return;
        }
        else{
            alert(`Autenticación exitosa!\nUsuario: ${userName}`);
        }
    };

    const handlerNotImplemented = () => {
        alert('función no implementada');
    };

    return(
        <main className="main">
            <div className="container">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text text-large">Sign In</h1>
                        <p className="text text-normal">New user? 
                            <span style={{paddingLeft: '0.5em'}}>
                                <button className="text text-links" onClick={handlerNotImplemented}>Create an account</button>
                            </span>
                        </p>
                    </div>
                    <form name="login" className="form">
                        <div className="input-control">
                            <label htmlFor="email" className="input-label" hidden>Email Address</label>
                            <input 
                            ref={userNameInputRef}
                            type="email" 
                            name="email" 
                            className="input-field"
                            value={userName}
                            onChange={handlerUserNameOnChange} 
                            placeholder="Email Address"/>
                        </div>
                        <div className="input-control">
                            <label htmlFor="password" className="input-label" hidden>Password</label>
                            <input
                            ref={passwordInputRef} 
                            type="password" 
                            name="password" 
                            className="input-field"
                            value={password}
                            onChange={handlerPasswordOnChange} 
                            placeholder="Password"/>
                        </div>
                        <div className="input-control">
                            <button className="text text-links" onClick={handlerNotImplemented}>Forgot Password</button>
                            <input 
                            type="button" 
                            name="submit" 
                            className="input-submit" 
                            value="Login"
                            onClick={handlerOnSubmit}/>
                        </div>
                    </form>
                    <div className="striped">
                        <span className="striped-line"></span>
                        <span className="striped-text">Or</span>
                        <span className="striped-line"></span>
                    </div>
                    <div className="method">
                        <div className="method-control">
                            <button className="method-action" onClick={handlerNotImplemented}>
                                <Icon icon="ion:logo-google" color="#f44336" width="30" />
                                <span style={{paddingLeft: '1em'}}>Sign in with Google</span>
                            </button>
                        </div>
                        <div className="method-control">
                            <button className="method-action" onClick={handlerNotImplemented}>
                                <Icon icon="ion:logo-facebook" color="#1a73e8" width={30} />
                                <span style={{paddingLeft: '1em'}}>Sign in with Facebook</span>
                            </button>
                        </div>
                        <div className="method-control">
                            <button className="method-action" onClick={handlerNotImplemented}>
                                <Icon icon="ion:logo-apple" width="30" />
                                <span style={{paddingLeft: '1em'}}>Sign in with Apple</span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default LoginPage;