const PUBLISHED_LOGOS = {
    'DC Comics': '/images/dc-comics.png',
    'Marvel Comics': '/images/marvel-comics.png',
    'Dark Horse Comics': '/images/dark-horse-comics.png',
    'Wildstorm': '/images/Wildstorm-logo.webp',
    'NBC - Heroes': 'https://fanart.tv/fanart/tv/79501/hdtvlogo/heroes-50cf041be7d30.png'
}
const HeroInfoModal = () => {
    return (
        <div className="modal fade" id="modal-hero" tabIndex={-1} aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable col-sm-12 col-12 col-lg-1">
            </div>
            <div className="modal-content bg-info banger">
                <div className="modal-header fondo-banner">
                    <h5 className="modal-title"
                        id="modalLabel">(datos_heroe.biography['full-name'] == '') ? datos_heroe.name :
                        datos_heroe.biography['full-name']</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body fondo-brushed">
                    <div className="row">
                        <div className="col-lg-5">
                            <img src="datos_heroe.image" alt="250" width="180"
                                 className="col-6 col-sm-6 col-lg-12 mb-1"/>
                            <img src="PUBLISHED_LOGOS['datos_heroe.biography.publisher']" alt="250" width="190"
                                 className="col-md-6 col-lg-12 mt-2 d-none d-sm-block d-md-block d-lg-block"/>
                        </div>
                        <div className="col-lg-7">
                            <p>Lugar de
                                Nacimiento: (datos_heroe.biography['place-of-birth'] == '-') ? 'Sin informacion' :
                                datos_heroe.biography['place-of-birth']</p>
                            <p>Relaciones: (datos_heroe.connections.relatives == '-') ? 'Sin informacion' :
                                datos_heroe.connections.relatives</p>
                            <p>Genero: (datos_heroe.appearance.gender == 'Male') ? 'Masculino' : 'Femenino'</p>
                            <p>Raza: (datos_heroe.appearance.race == 'null') ? 'Sin informacion' :
                                datos_heroe.appearance.race</p>
                            <p>Ocupacion: (datos_heroe.work.occupation == '-') ? 'Sin informacion' :
                                datos_heroe.work.occupation</p>
                            <p>Base de
                                Operaciones: (datos_heroe.work.base == '-') ? 'Sin informacion' :
                                datos_heroe.work.base</p>
                            <p>Alias: <span
                                v-for="alias in datos_heroe.biography.aliases">(alias == '-') ? 'Sin informacion' : ' #' + alias</span>
                            </p>
                            <p>Alter
                                Egos: (datos_heroe.biography['alter-egos'] == "No alter egos found.") ? "Sin alter egos"
                                : datos_heroe.biography['alter-egos']</p>
                            <p>Alineacion: (datos_heroe.biography.alignment == 'good') ? 'Bueno' : 'Malo'</p>
                            <p>Grupo de
                                Afiliacion: (datos_heroe.connections['group-affiliation'] == '-') ? 'Sin informacion' :
                                datos_heroe.connections['group-affiliation']</p>
                            <p>Primera
                                Aparicion: (datos_heroe.biography['first-appearance'] == '-') ? 'Sin informacion' :
                                datos_heroe.biography['first-appearance']</p>
                            <p>Publicador: (datos_heroe.biography.publisher == '') ? 'Sin informacion' :
                                datos_heroe.biography.publisher</p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer fondo-banner">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    );
}

export default HeroInfoModal;