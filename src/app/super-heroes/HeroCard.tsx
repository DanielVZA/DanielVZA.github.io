import {SuperHero} from "@/types/SuperHero";

const HeroCard = ({hero}: { hero: SuperHero }) => {
    return (
        <div className="card p-3 m-2 fondo-banner bg-info hero-card fondo-cardboard" data-toggle="modal"
             data-target="#modal-hero">
            {/*onClick={() => console.log('cargarModalHero(heroe)')}*/}
            <div className="card-title">
                <h3 className="text-center banger-25">{hero.name}</h3>
            </div>
            <img src={hero.images.md} width="Responsive image" height="250" alt={`a ${hero.name} profile`}/>
            <div className="card-body text-center banger">
                <span>Inteligencia</span>
                <div className="progress">
                    <div className="progress-bar bg-success" aria-valuemin={0} aria-valuemax={100}
                         style={{width: (hero.powerStats?.intelligence == null) ? 0 : hero.powerStats.intelligence + '%'}}
                    ></div>
                </div>
                <span>Fuerza</span>
                <div className="progress">
                    <div className="progress-bar bg-primary" aria-valuemin={0} aria-valuemax={100}
                         style={{width: (hero.powerStats?.strength == null) ? 0 : hero.powerStats.strength + '%'}}
                    ></div>
                </div>
                <span>Velocidad</span>
                <div className="progress">
                    <div className="progress-bar bg-secondary" aria-valuemin={0} aria-valuemax={100}
                         style={{width: (hero.powerStats?.speed == null) ? 0 : hero.powerStats.speed + '%'}}
                    ></div>
                </div>
                <span>Resistencia</span>
                <div className="progress">
                    <div className="progress-bar bg-warning" aria-valuemin={0} aria-valuemax={100}
                         style={{width: (hero.powerStats?.durability == null) ? 0 : hero.powerStats.durability + '%'}}
                    ></div>
                </div>
                <span>Poder</span>
                <div className="progress">
                    <div className="progress-bar bg-danger" aria-valuemin={0} aria-valuemax={100}
                         style={{width: (hero.powerStats?.power == null) ? 0 : hero.powerStats.power + '%'}}
                    ></div>
                </div>
                <span>Combate</span>
                <div className="progress">
                    <div className="progress-bar bg-dark" aria-valuemin={0} aria-valuemax={100}
                         style={{width: (hero.powerStats?.combat == null) ? 0 : hero.powerStats.combat + '%'}}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;