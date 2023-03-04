import projects from '../assets/json/projects.json';
import Project from '../components/Project/Project';
import { Container, Row } from 'react-bootstrap';

function Projects() {
    return (
        <>
            <p>This is the projects page</p>
            <Container>
                <Row>
                    {projects.map((project, index) => {

                        return <Project
                            key={index}
                            id={index}
                            title={project.title}
                            github={project.github}
                            image={project.image}
                        />

                    })}
                </Row>
            </Container>
        </>
    )
}

export default Projects;