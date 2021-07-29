import React from 'react';

type NavbarProps = {
    actions?: React.ReactNode
};

const Navbar = (props: NavbarProps) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex flex-row-reverse w-100">
                    {props.actions}
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;