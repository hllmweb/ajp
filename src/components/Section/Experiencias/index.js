import { Link } from 'react-router-dom';
import './style.css';

function Experiencia(){
    return(
        <>
            <div className="section">
                <div className="section-container">
                    <div className="section-title">O que fazer no Amazon Jungle Palace?</div>
                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <div className="content-heading">
                                <div className="section-wrapper-item-title">A Natureza está em nosso DNA</div>
                                <div className="section-wrapper-description">O Amazon Jungle Palace segue os mais exigentes padrões de sustentabilidade e todas normas ambientais vigentes no país. 
                                            O ecoturismo é uma prática sustentável que adotamos, fazendo uma gestão dos recursos naturais utilizados pelo hotel de forma consciente e com baixo impacto na natureza, 
                                            preservando o ecossistema ao seu redor e gerando benefícios às comunidades locais e povos indígenas.
                                </div>
                            </div>
                        </div>
                        <div className="section-wrapper-item">
                            <video className="elementor-video"  autoPlay={true} loop controls muted>
                                <source src="https://amazonjunglepalace.com.br/site/wp-content/uploads/2020/02/inicio_hotel.mp4" type="video/mp4" />    
                            </video>
                        </div>
                    </div>        
                </div>
            </div>


            <div className="section exp-bg-1">
                <div className="section-container flex-center">
                    <div className="exp-title">Serviços e Experiências</div>
                    <div className="exp-description">
                        <p>Viva as melhores aventuras da sua vida no <strong>Amazon Jungle Palace</strong></p>
                        <p>Conheça todas as nossas opções de atividades e pacotes de aventuras e viva momentos inesquecíveis.</p> 
                        <p><Link to="/experiencias" className="btn">VEJA MAIS</Link></p>   
                    </div>

                
                </div>
            </div>
        </>
    );
}

export default Experiencia;