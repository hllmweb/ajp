import './style.css';
import { Link } from 'react-router-dom';


function Nav(){
    return(
        <>  
            <div className="menu">
                <ul>
                    <li><Link to="/">O Hotel</Link></li>
                    <li><Link to="/acomodacoes">Acomodações</Link></li>
                    <li><Link to="/acomodacoes">Gastronomia</Link></li>
                    <li><Link to="/acomodacoes">Passeios</Link></li>
                    <li><Link to="/acomodacoes">Experiências</Link></li>
                    <li><Link to="/acomodacoes">Eventos</Link></li>
                    <li><Link to="/acomodacoes">Contato</Link></li>
                    
                    <div className="menu-extra">
                        <div className="menu-translate">
                            <Link to="#"><img src={process.env.PUBLIC_URL+'/assets/img/icon-translate-br.png'} alt="Amazon Jungle Palace"/>Português</Link>
                        </div>
                        <div className="menu-social">
                            <Link to="#"><img src={process.env.PUBLIC_URL+'/assets/img/icon-instagram.png'} alt="Amazon Jungle Palace"/></Link>
                            <Link to="#"><img src={process.env.PUBLIC_URL+'/assets/img/icon-facebook.png'} alt="Amazon Jungle Palace"/></Link>
                        </div>
                    </div>


                </ul>

         



            </div>
            

        </>
    );
}

export default Nav;