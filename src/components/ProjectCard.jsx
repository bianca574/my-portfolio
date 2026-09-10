import './ProjectCard.scss'

function ProjectCard({ project, onClick }) {
    return (
        <div className="project-card" onClick={() => onClick(project)}>
            <div className="project-card__image">
                {project.image ? (
                    <img src={project.image} alt={project.name} />
                ) : (
                    <div className="project-card__placeholder" />
                )}
            </div>
            <div className="project-card__body">
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__date">{project.date}</p>
            </div>
        </div>
    )
}

export default ProjectCard