import { Link } from 'react-router-dom';
import './style.css';

function Acomodacoes(){
    return(
        <>
        <div className="wrapper-flex">
            <div className="item">
                <div className="item-images">
                    <div className="item-text">
                        <div className="item-title">
                            Acomodações como você nunca viu
                        </div>
                        <div className="item-btn">
                            <Link to="/acomodacoes">Veja nossas Suítes</Link>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL+'/assets/img/acomodacoes-principal.png'} 
                        alt="Amazon Jungle Palace"/>
                </div>

            </div>
            <div className="item">
                <div className="item-cards">
                    <div className="item-card-box">
                        <div className="item-card-image">
                            <img src={process.env.PUBLIC_URL+'/assets/img/suite-01.png'} /> 
                        </div>

                        <div className="item-card-title">
                            Suite Junior
                        </div>
                        <div className="item-card-description">
                            Experimente a sensação de exclusividade e liberdade, hospedando-se em nossa magífica Suíte Júnior, totalmente equipado  para você e sua família viver essa experiência inesquecível.
                        </div>

                        <Link to="/acomodacoes/suite_junior" className="btn-link">Ver Suíte</Link>

                    </div> 

                    <div className="item-card-box">
                        <div className="item-card-image">
                            <img src={process.env.PUBLIC_URL+'/assets/img/suite-02.png'} /> 
                        </div>

                        <div className="item-card-title">
                            Suíte Master
                        </div>
                        <div className="item-card-description">
                        Experimente a sensação de exclusividade e liberdade, hospedando-se em nosso magnífico Suíte Master, totalmente equipado para você e sua família viver essa experiência inesquecível.
                        </div>

                        <Link to="/acomodacoes/suite_master" className="btn-link">Ver Suíte</Link>

                    </div> 
                </div>

                
            </div>
        </div>
        </>
    );
}
export default Acomodacoes;