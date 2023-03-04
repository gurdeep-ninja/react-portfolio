import { Button, Card, Col } from 'react-bootstrap';

function Project(props) {
    const { id, title, github, image, demo } = props;

    const firstProject = id === 0 ? "6" : "6";
    console.log(id);
    return (
        <Col xs={12} md={firstProject}>
            <Card className='bg-dark'>
                <Card.Img variant="top" src={"assets/images/" + image} alt={title} />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Button href={demo} className="md-w-100 w-50 me-1">Demo</Button>
                    <Button variant="secondary" href={github} className="w-25">Code</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Project;