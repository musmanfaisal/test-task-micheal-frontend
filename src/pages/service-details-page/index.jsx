import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from "../../components";
import { apis, useLoader } from '../../services';
import "./index.css";
import Plan from './includes/plan';

const ServiceDetailsPage = () => {
    const { loading, on, off } = useLoader(false);
    const [plans, setPlans] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const getServiceDetails = async () => {
        try {
            on();
            const { data } = await apis.getServiceDetails(id);
            setPlans(data);
        } catch (e) {
            console.log(e);
        } finally {
            off();
        }
    }

    useEffect(() => {
        getServiceDetails();
    }, [])

    return (
        <Layout loading={loading}>
            <Row className='justify-content-center'>
                <Col md={8} className="p-5 text-center">
                    <h1 className="display-4">
                        Pricing
                    </h1>
                    <p className="lead">
                        Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.
                    </p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={10}>
                    <Row className='p-0 m-0'>
                        {plans.map((plan) => <Plan key={plan.id} {...plan} />)}
                    </Row>
                </Col>
            </Row>
        </Layout>
    );
}

export default ServiceDetailsPage;