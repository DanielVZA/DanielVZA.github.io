const FindHeroModal = () => {
    return (
        <div className="modal fade" tabIndex={-1} aria-labelledby="modalXlLabel" aria-modal={true}>
            <div className="modal-dialog modal-xl">
                <div className="modal-content bg-info banger">
                    <div className="modal-header fondo-banner">
                        <h5 className="modal-title h4" id="modalXlLabel"> message " nombre "</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body fondo-brushed">
                        <div className="card-deck">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3" v-for="heroe in result">
                                <h1>HERO CARD</h1>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer fondo-banner">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindHeroModal;