import { useState } from 'react';
import './style.css';

function Motor(){
    const [fixo, setFixo] = useState(false);
    const handleScrollTop = () =>{
        console.log(window.screen.height);
        if(window.scrollY > 500){
            setFixo(true);
        }else{
            setFixo(false);
        }
        // console.log(window.screenY);
    }
    
    window.addEventListener("scroll", handleScrollTop);

   
    return(
        <>
            <div className={fixo == true ? 'wrapper fixo' : 'wrapper'} >
                <div className="container">
                    <form className="form_search">
                       <label>
                            <input type="text" placeholder="00/00/0000" className="input_text_date"/>   
                            <img src={process.env.PUBLIC_URL+'/assets/img/icon-date.png'} alt="Data Inicial"/>
                        </label> 
                        <label>
                            <input type="text" placeholder="00/00/0000" className="input_text_date"/>   
                            <img src={process.env.PUBLIC_URL+'/assets/img/icon-date.png'} alt="Data Fim"/>
                        </label> 
                        <label>
                            <input type="text" placeholder="2 Adultos" className="select_text"/>  
                            <img src={process.env.PUBLIC_URL+'/assets/img/icon-arrow-down.png'} alt="Arrow Down"/> 
                        </label>
                        <label>
                            <input type="text" placeholder="2 Crianças" className="select_text"/>  
                            <img src={process.env.PUBLIC_URL+'/assets/img/icon-arrow-down.png'} alt="Arrow Down"/> 
                        </label>
                        <label>
                            <button className="btn btn_success">Simular Reserva</button>
                        </label>

                    </form>
                </div>
            </div>
        </>
    );
}
export default Motor;