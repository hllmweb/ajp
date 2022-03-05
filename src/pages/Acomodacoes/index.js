import React from "react";

import PageHeader from "../../components/Header/pageHeader";
import PageTitle from "../../components/Header/pageTitle";
import PageContent from "../../components/Content/";



export default function  Acomodacoes(){
  
      return(
          <>  
            <PageHeader />
            <PageTitle 
            title="Nossas Acomodações"
            description="Conheça todos os nossos tipos de acomodações e 
            escolha a melhor para desfrutar ao máximo sua estada 
            conosco no Amazon Jungle Palace em Manaus, Amazonas." />
            <PageContent />

          </>
      );
}

