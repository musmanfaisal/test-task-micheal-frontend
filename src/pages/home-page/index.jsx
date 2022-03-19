import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import { Layout } from "../../components";
import { apis, useLoader } from '../../services';
import Service from './includes/service';


const HomePage = () => {
    const { loading, on, off } = useLoader(false);
    const [services, setServices] = useState([]);

    const getHomeData = async () => {
        try {
            on();
            const { data } = await apis.getServices();
            setServices(data);
        } catch (e) {
            console.log(e);
        } finally {
            off();
        }
    }

    useEffect(() => {
        getHomeData();
    }, [])

    return (
        <Layout loading={loading} container={false}>
            {services.length !== 0 &&
                <>
                    <div className="p-5 jumbotron jumbotron-fluid bg-light">
                        <Container>
                            <h1 className="display-4">Hello, world!</h1>
                            <p className="lead">
                            This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.
                            </p>
                        </Container>
                    </div>
                    <Container>
                        <Row>
                            {services.map((service) => <Service key={service.id} {...service} />)}
                        </Row>
                    </Container>
                </>}
        </Layout>
    )
}

export default HomePage;