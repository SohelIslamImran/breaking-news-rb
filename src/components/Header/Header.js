import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img alt="" src="https://react-bootstrap.netlify.app/logo.svg" width="30" height="30" className="d-inline-block align-top" />
                {' '} Breaking News By React Bootstrap
            </Navbar.Brand>
        </Navbar>
    );
};

export default Header;