import { React, Component } from 'react';

import { Row, Col, Form, Button, Alert } from 'react-bootstrap';

class Contact extends Component {
    // Setting the component's initial state
    state = {
        email: "",
        name: "",
        message: "",
        error: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Report an error if all the form fields are not filled in
        if (this.state.email === '' || this.state.name === '' || this.state.message === '') {
            // Set state used to control the 'error' property to display either an fail or success message on form submissions.
            this.setState({
                error: "yes"
            });

            // If the form fields are all filled, then process form submission
        } else {

            // If there are no errors,set the error state property to no and clear the form fields.
            this.setState({
                error: "no"
            });

            this.setState({
                name: "",
                email: "",
                message: ""
            });
        }
    };

    // Decide on what message to show to the user when they click the form submit
    // Returns Bootstrap Alert component with the message
    showMessage = () => {

        switch (this.state.error) {
            case "yes":
                return <Alert variant="danger">Please fill out all of the fields!</Alert>;
            case "no":
                return <Alert variant="success">Thank you! I will get in touch shortly!</Alert>;
            default:
            // code block
        }
    }


    render() {
        return (
            <>
                <h1>Contact me</h1>
                {this.showMessage()}
                <section>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control value={this.state.email} name="email" type="email" placeholder="Enter email" onChange={this.handleInputChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control value={this.state.name} name="name" type="text" placeholder="Enter your name" onChange={this.handleInputChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Enter your message</Form.Label>
                                    <Form.Control value={this.state.message} name="message" as="textarea" rows={3} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Button onClick={this.handleFormSubmit} variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </section>
            </>
        )
    }
}

export default Contact;