import React from 'react';
import './Header.css';

type HeaderProps = {
    title: string,
    message: string,
    variant?: 'welcome' | 'bye'
};

const Header = (props: HeaderProps) => {

    const [classNameVariant, setClassNameVariant] = React.useState<string>(props.variant || "p-5 mb-4 rounded-3 bg-welcome");

    React.useEffect(() => {
        const _classNameVariantWelcome:string = "p-5 mb-4 rounded-3 bg-welcome";
        const _classNameVariantBye:string = "p-5 mb-4 rounded-3 bg-bye";

        (props.variant) === 'bye' ? setClassNameVariant(_classNameVariantBye) : setClassNameVariant(_classNameVariantWelcome);

    }, [props.variant]);

    return(
        <div className={`${classNameVariant}`}>
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">
                    {props.title}
                </h1>
                <p className="col-md-8 fs-4">
                    {props.message}
                </p>
            </div>
        </div>
    );
};

export default Header;