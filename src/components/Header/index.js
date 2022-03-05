import './style.css';
import { useState } from 'react';
import Logo from './../Logo';
import Nav from './../Nav';

function Header(){ 
    const [visible, setVisible] = useState(false)
  
    const handleScroll = () =>{
        if(window.scrollY >= 100){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }
    
    window.addEventListener("scroll", handleScroll);

    return(
        <>
            <div className="header">
                <div id="header_top" className={visible ? 'header_top fixo' : 'header_top'}>
                    <Logo />
                    <Nav />
                </div>
                <img src={process.env.PUBLIC_URL+'/assets/img/slide/img1.png'} alt="Amazon Jungle Palace"/>
                
            </div>
        </>
    );
}

export default Header;