import { React, Component } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationArrow, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
                return <></>;
        }
    }


    render() {
        return (
            <>
                <section className="section-container pt-3 pt-md-5">
                    <h2 className="pb-md-4">Contact me</h2>
                    {this.showMessage()}
                    <Row>
                        <Col md={8}>
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
                        <Col md={4} className="contact-details ps-md-5 mt-5 mt-md-0">
                            <Row className="align-items-top">
                                <Col>
                                    <a href="mailto:gurdeepbangar@proton.me"><FontAwesomeIcon icon={faEnvelope} /><span className='ms-2'>Email</span></a>
                                </Col>
                            </Row>
                            <Row className="align-items-top">
                                <Col>
                                    <a href="https://github.com/gurdeep-ninja/"><FontAwesomeIcon icon={faGithub} /><span className='ms-2'>GitHub</span></a>
                                </Col>
                            </Row>
                            <Row className="align-items-top">
                                <Col>
                                    <a href="https://www.linkedin.com/in/gurdeep-bangar-393543259/"><FontAwesomeIcon icon={faLinkedin} /><span className='ms-2'>LinkedIn</span></a>
                                </Col>
                            </Row>
                            <Row className="align-items-top">
                                <Col>
                                    <a href="assets/documents/cv.pdf"><FontAwesomeIcon icon={faFilePdf} /><span className='ms-2'>Resume / CV</span></a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </>
        )
    }
}

export default Contact;