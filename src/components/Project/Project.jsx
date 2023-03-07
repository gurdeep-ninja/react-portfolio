import { Button, Card, Col } from 'react-bootstrap';
import Skills from './Skills';

function Project(props) {

    // Deconstruct the props object into variables
    const { id, title, github, image, demo, skills } = props;

    // If it's the first project, make the column width 12 so it's a hero project
    const firstProject = id === 0 ? "12" : "6";
    return (
        <Col xs={12} md={firstProject}>
            <Card className='bg-dark'>
                <Card.Img variant="top" src={require("../../assets/images/" + image)} alt={title} />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Button href={demo} className="md-w-100 w-50 me-1">Demo</Button>
                    <Button variant="secondary" href={github} className="w-25">Code</Button>
                    <div className="skills">
                        {skills.map((skill, index) => (
                            <Skills key={index} skill={skill} />
                        ))}
                    </div>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default Project;