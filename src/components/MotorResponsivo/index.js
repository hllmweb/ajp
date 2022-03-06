import './style.css';

export default function MotorResponsivo(){
    return(
    <>
        <div className="wrapper-responsivo">
            <form className="form-search">
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
    </>
    );
}