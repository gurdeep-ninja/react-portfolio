import projects from '../assets/json/projects.json';
import Project from '../components/Project/Project';

function Projects() {
    return (
        <>
        <p>This is the projects page</p>
            {projects.map((project) => {
                return <Project key={project.id}
                id = {project.id} 
                title = {project.title}
                github = {project.github}
                image = {project.image}
                />

            })}
        </>
    )
}

export default Projects;