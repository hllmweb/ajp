import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import PageHeader from "../../components/Header/pageHeader";
import PageTitle from "../../components/Header/pageTitle";
import Footer from "../../components/Rodape";
import Motor from '../../components/Motor';


function Gastronomia(){
  

    return(
        <>  
          <PageHeader />
          <PageTitle 
            title="Nossa Gastronomia" 
            description="No Amazon Jungle Palace cada prato regional ganha um toque da gastronomia internacional e une o rústico e o luxo, então prepare seu paladar para desfrutar do que a Amazônia tem de melhor .
            A culinária  Amazônica é conhecida pela sua autenticidade peculiaridade de pratos que só temos aqui devido à existência de mais de duas mil espécies de peixes nos rios do Amazonas, a culinária amazonense valoriza, acima de tudo, o pescado.
            As principais espécies consumidas são o tambaqui, tucunaré, pirarucu, jaraqui, pacu e matrinchã, que são transformados em pratos típicos, servidos fritos, assados ou cozidos." />


        <div className="page-section-content">


           <div className="page-section-container">

                <Swiper
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/gastronomia1.png'} height="250px" /> </SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/gastronomia2.jpg'} height="250px" /> </SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/gastronomia3.jpg'} height="250px" /> </SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/gastronomia4.jpg'} height="250px" /> </SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/gastronomia5.jpg'} height="250px" /> </SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/gastronomia6.jpg'} height="250px" /> </SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/gastronomia7.jpg'} height="250px" /> </SwiperSlide>

                </Swiper>

            </div>




            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia6.JPG'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Café da Manhã</div>     
                    <div className="section-wrapper-item-description">
                        <p>Café da Manhã.</p>
                    </div>
                    
                </div>                   
            </div> 





            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Almoço ou Janta</div>     
                    <div className="section-wrapper-item-description">
                        <p>Almoço</p>
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia5.JPG'}/> 
                    </div>
                </div>                   
            </div> 





            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia8.JPG'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Bebidas</div>     
                    <div className="section-wrapper-item-description">
                        <p>Bebidas</p>
                    </div>
                    
                </div>                   
            </div> 




            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Petiscos</div>     
                    <div className="section-wrapper-item-description">
                        <p>Petiscos</p>
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia5.JPG'}/> 
                    </div>
                </div>                   
            </div> 



        </div>
            

        <Footer />
        <Motor />
 
        </>
    );
}

export default Gastronomia;