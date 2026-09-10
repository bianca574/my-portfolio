import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Portfolio.scss'

function Portfolio() {
    const handleCardClick = (project) => {
        console.log('clicked:', project.name)
    }

    return (
        <section id="portfolio" className="portfolio">
            <p className="portfolio__label">Portfolio</p>
            <h2 className="portfolio__title">Mes Projets</h2>
            <p className="portfolio__subtitle">
                Découvrez mes projets universitaires et personnels. Cliquez sur une carte pour explorer les détails et les technologies utilisées.
            </p>

            <div className="portfolio__grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
        </section>
    )
}

export default Portfolio