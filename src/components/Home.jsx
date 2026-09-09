import './Home.scss'

function Home() {
    return (
        <section className="home">

            <p className="home__greeting">Bonjour, je suis</p>
            <h1 className="home__name">Bianca</h1>
            <p className="home__tagline">
                Étudiante en Mathématiques et Informatique.<br />
                Je construis des projets en Java, C et React.
            </p>

            <div className="home__actions">
                <a href="#portfolio" className="btn btn--primary">
                    Voir mes projets
                </a>
                <a href="mailto:ton.email@example.com" className="btn btn--ghost">
                    Me contacter
                </a>
            </div>

            <div className="home__badge">
                <span className="badge">Double licence Math-Info</span>
            </div>
        </section>
    )
}

export default Home