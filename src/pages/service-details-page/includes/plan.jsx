import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../services';

const Plan = ({ name, buttonText, content, price, outline }) => {
    const navigate = useNavigate();

    return (
        <Col lg={4} md={6} sm={6} className="pt-3">
            <Card className='text-center'>
                <Card.Header className='p-3' as="h4">{name}</Card.Header>
                <Card.Body>
                    <Card.Text as='h3' className="pb-3">
                        {price} <span className='text-muted'>$/mo</span>
                    </Card.Text>
                    <Card.Text className="pb-3 plan-details" dangerouslySetInnerHTML={{ __html: content }} />
                    <Button size="lg" variant={outline ? "outline-primary" : "primary"} className="mb-3 w-100" onClick={() => navigate(routes.checkout)}>
                        {buttonText}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Plan;