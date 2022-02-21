import './style.css';

function Gastronomia(){
    return(
        <>
            <div className="section">
                <div className="section-container">
                    <div className="section-title">Gastronomia</div>
                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-image">
                            <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia.png'} 
                                 alt="Amazon Jungle Palace"/>
                            </div>
                        </div>
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">
                                Experimente a Culinária Amazônica
                            </div>

                            <div className="section-wrapper-description">
                                Conheça mais sobre nosso espaço, pensado para trazer inesquecíveis experiências, tanto visuais, com nossas exuberantes vistas do rio negro, como gastronômicas, com os mais diversos sabores em verdadeiras obras culinárias.
                            </div>

                            <div className="section-wrapper-item-btn">
                                <button>Conheça Mais</button>
                            </div>

                        </div>
                    </div>
             
                </div>
            </div>
        </>
    );
}
export default Gastronomia;