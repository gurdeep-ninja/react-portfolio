import portfolio from '../assets/json/projects.json';
import Project from '../components/Project/Project';

function Projects() {
    return (
        <>
        <p>This is the projects page</p>
            {portfolio.map((project) => {
                <Project item={project} />
                console.log(project.github)
            })}
        </>
    )
}

export default Projects;