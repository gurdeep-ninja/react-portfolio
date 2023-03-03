import { Card, Container, Row, Col } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

function Project(props) {
    const { id, title, github, image } = props;

    const firstProject = id === 0 ? "12" : "6";
    console.log(id);
    return (
        <Col xs={12} md={firstProject}>
            <Card className='bg-dark'>
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Project;