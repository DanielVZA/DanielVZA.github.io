import SuperHeroList from "@/app/super-heroes/SuperHeroList";

const Hero = async () => {
    return (
        <div id="superhero">
            {/*className="container-fluid"*/}
            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
                <SuperHeroList/>
            </div>
        </div>
    );
}

export default Hero;