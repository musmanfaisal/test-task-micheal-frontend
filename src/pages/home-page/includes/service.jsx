import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import { routes } from '../../../services';
import { useNavigate } from 'react-router-dom';

const Service = ({ name, id, description }) => {
    const navigate = useNavigate();

    return (
        <Col lg={4} md={6} sm={6} className="pt-3">
            <Card className='border-0'>
                <Card.Body>
                    <Card.Title className="pb-3">{name}</Card.Title>
                    <Card.Text className="pb-3">
                        {description}
                    </Card.Text>
                    <Button variant='secondary' className="mb-3" onClick={() => navigate(routes.service.replace(":id", id))}>
                        View details »
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Service