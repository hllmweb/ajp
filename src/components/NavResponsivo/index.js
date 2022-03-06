import { Link } from "react-router-dom";
import './style.css';
import Logo from "../Logo";
import { MdOutlineClose } from "react-icons/md";
import MotorResponsivo from "../MotorResponsivo";

export default function NavResponsivo(){
    const closeMenuResponsivo = () => {
        document.querySelector("#menu-responsivo").classList.add("none");
    } 

    return(
        <>
            <div id="menu-responsivo" className="menu-responsivo none">
                <Logo />
                <Link to="#" onClick={() => closeMenuResponsivo()} className="menu-burger"><MdOutlineClose size={45} /></Link>
                <ul>
                    <li><Link to="/acomodacoes"><span>Acomodações</span></Link></li>
                    <li><Link to="/passeios"><span>Passeios</span></Link></li>
                    <li><Link to="/experiencias"><span>Experiencias</span></Link></li>
                    <li><Link to="/eventos"><span>Eventos</span></Link></li>
                    <li><Link to="/contato"><span>Contato</span></Link></li>
                </ul>

                <MotorResponsivo />
            </div>
        </>
    );
}