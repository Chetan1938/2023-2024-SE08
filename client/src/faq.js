import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className="container mt-5">
            <h1>Frequently Asked Questions</h1>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            What products do the farmers sell on this platform?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Farmers on our platform sell a wide range of fresh produce including fruits, vegetables, grains, dairy products, meats, and more.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            How can I place an order from a farmer?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            To place an order, simply browse through the products listed by farmers, select the items you want to purchase, and proceed to checkout. You can then choose your preferred payment method and delivery options.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Are the products organic or conventionally grown?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            We have a diverse range of farmers on our platform, some of whom offer organic products while others follow conventional farming practices. You can find information about each farmer's growing practices on their profile page.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            How are the prices determined?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            Prices are set by the farmers themselves based on factors such as production costs, market demand, and seasonality. We strive to ensure fair pricing for both farmers and customers.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default FAQ;
