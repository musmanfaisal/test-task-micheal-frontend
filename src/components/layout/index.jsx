import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import Headers from '../header';

const Layout = ({ children, loading, container = true }) => {
    const Wrapper = container ? Container : React.Fragment;

    return (
        <>
            <Headers />
            <Wrapper className='p-3'>
                {loading ?
                    <Row className='justify-content-center p-5'>
                        <Spinner animation='grow' variant='dark' />
                    </Row>
                    :
                    children}
            </Wrapper>
        </>
    )
}

export default Layout;