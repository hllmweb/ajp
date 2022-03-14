import React from "react";


import PageHeader from "../../components/Header/pageHeader";
import PageTitle from "../../components/Header/pageTitle";
import Footer from "../../components/Rodape";
import Motor from '../../components/Motor';




function Contato(){
    return(
        <>  
          <PageHeader />
          <PageTitle 
            title="Contato" 
            description="Descreva..." />
            

        <Footer />
        <Motor />
 
        </>
    );



}  

export default Contato;