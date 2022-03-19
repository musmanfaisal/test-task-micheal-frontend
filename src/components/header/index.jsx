import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { routes } from '../../services';

const Headers = () => {
    return (
        <Navbar bg="light" expand="lg" variant="light" className='shadow-sm'>
            <Container>
                <Navbar.Brand as={Link} to={routes.home}>
                    React-Bootstrap
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Headers;