import ComicBook from "@/app/comics/ComicBook";
import React from "react";

const ComicsPage = () => {
    return (
        <div>
            <main>
                <div id="index">
                    <div className="container-fluid">
                        <div className="row m-2">
                            <ComicBook maxId={5}/>
                        </div>
                        <div className="row p-4 mt-3 mb-3" style={{backgroundColor: '#000'}}>
                            <div className="col col-xl-12 col-12 text-center"
                                 style={{color: '#F5E83D', fontFamily: 'Bangers'}}>
                                <h1>PRONTO</h1>
                                <h3>EL COMIC DE KICKASS</h3>
                            </div>
                            <div className="col col-xl-12 col-12 text-center">
                                <img src="images/kickass.jpg" className="img-fluid" alt="KickAss Banner"/>
                            </div>
                        </div>
                        <div className="row m-2">
                            <ComicBook minId={4}/>
                        </div>
                    </div>
                </div>
                {/*<SuperheroSearch/>*/}
            </main>
        </div>
    );
}

export default ComicsPage;