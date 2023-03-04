import projects from '../assets/json/projects.json';
import Project from '../components/Project/Project';
import { Container, Row } from 'react-bootstrap';

function Projects() {
    return (
        <>
            <section className="section-container pt-3 pt-md-5">
                <h2 className="pb-md-4">Projects</h2>
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
            </section>
        </>
    )
}

export default Projects;