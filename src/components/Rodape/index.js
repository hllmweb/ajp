import React from 'react';
import './style.css';

function Rodape(){
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src  = "https://hsystem-hbot.s3.amazonaws.com/public/HBOT_CHAT_CLIENT/hbot_chat_web_61c392c907ebfd0001ca0e9e.js";
    //     //script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     }
    // },[]);
    
    
    return(
        <>
            <div className="footer">
                <p>Amazon Jungle Palace </p>
            </div>
            
        </>
    );
}
export default Rodape;