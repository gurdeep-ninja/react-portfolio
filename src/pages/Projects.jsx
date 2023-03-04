import projects from '../assets/json/projects.json';
import Project from '../components/Project/Project';
import { Container, Row } from 'react-bootstrap';

function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <Container>
                <Row>
                    {projects.map((project, index) => {

                        return <Project
                            key={index}
                            id={index}
                            title={project.title}
                            github={project.github}
                            image={project.image}
                            demo={project.demo}
                        />

                    })}
                </Row>
            </Container>
        </>
    )
}

export default Projects;