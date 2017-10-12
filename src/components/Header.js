import React from 'react';

const Header = (props) => {
    return (
        <header className="navbar-fixed">
            <nav className="indigo lighten-2">
                <div className="nav-wrapper">
                <div className="brand-logo center">Welcome {props.name}! </div>
                </div>
            </nav>
        </header>
    );
}


export default Header;