import './style.css';

function Midias(){
    return(
        <>
            <div className="section">
                <div className="section-wrapper-midias">
                    <div className="section-wrapper-midias-item">

                        <div className="section-wrapper-midias-item-title">
                            Mídias Sócias
                        </div>
                        <img src={process.env.PUBLIC_URL+'/assets/img/icon-rodape-instagram.png'} /> 
                        
                        <img src={process.env.PUBLIC_URL+'/assets/img/icon-rodape-facebook.png'} /> 

                    </div>
                    <div className="section-wrapper-midias-item">
                        <div className="section-wrapper-midias-item-3">
                            <div className="section-wrapper-midias-item-box">
                                <img src={process.env.PUBLIC_URL+'/assets/img/icon-rodape-email.png'} /> 
                                <strong>E-Mail</strong>
                                <span>comercial@amazonjunglepalace.com.br</span>
                            </div>
                            <div className="section-wrapper-midias-item-box">
                                <img src={process.env.PUBLIC_URL+'/assets/img/icon-rodape-telefone.png'} /> 
                                <strong>Telefone</strong>
                                <span>+55 (92) xxxx-xxxx</span>                                
                            </div>
                            <div className="section-wrapper-midias-item-box">
                                <img src={process.env.PUBLIC_URL+'/assets/img/icon-rodape-whatsapp.png'} /> 
                                <strong>Whatsapp</strong>
                                <span>+55 (92) xxxx-xxxx</span>                                  

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Midias;