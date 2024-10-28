import './Projects.css'
import Project from './Project'

const Projects = () => {
    const projects = [
        { id: 1, title: 'Project 1', img: '/assets/spotifyui.jpg' },
        { id: 2, title: 'Project 2', img: '/assets/spotifyui.jpg' },
        { id: 3, title: 'Project 3', img: '/assets/spotifyui.jpg' },
        { id: 4, title: 'Project 4', img: '/assets/spotifyui.jpg' },
    ]

    return (
        <div className="projects">
            {projects.map((project) => (
                <Project
                    key={project.id}
                    props={project}
                />
            ))}
        </div>
    )
}

export default Projects
