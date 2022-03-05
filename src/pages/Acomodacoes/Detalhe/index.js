import React from "react";
import {useParams} from "react-router-dom";
import PageHeader from "../../../components/Header/pageHeader"
import PageTitle from "../../../components/Header/pageTitle";
import Section_Midias from "../../../components/Section/Midias";
import Footer from '../../../components/Rodape';
import Motor from "../../../components/Motor";
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

export default function AcomodacoesDetalhe(){
    const {detalhe} = useParams();

    let title = "";
    let description = "";
    switch(detalhe){
      case 'suite_junior':
        title = "Suíte Junior";
        description += `A ${title} foi construída dentro dos mais altos padrões da hotelaria.`; 
        description += "Os 3 (três) apartamentos que dispomos nesse categoria apresentam diferenças extremamente"; 
        description += "sutis entre si. Todas contam com com sacada, vista para piscina, cama King Size, banheiro privativo e secador de cabelos.";
        break;
      case 'suite_master':
        title = "Suíte Master";
        description += `A ${title} foi construída dentro dos mais altos padrões da hotelaria.`; 
        description += "Os 3 (três) apartamentos que dispomos nesse categoria apresentam diferenças extremamente"; 
        description += "sutis entre si. Todas contam com com sacada, vista para piscina, cama King Size, banheiro privativo e secador de cabelos.";
        break;
    }

    return(
        <>
            <PageHeader />
            <PageTitle 
            title={title}
            description={description} />
            
            <div className="page-content">
            <Swiper
              spaceBetween={5}
              slidesPerView={3}
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
            </Swiper>


  


            </div>

            <div className="section-container">
              <div className="section-title">Vantagens da {title}</div>
              <div className="section-wrapper page-section-wrapper">
                  <div className="section-wrapper-item">
                
                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-wifi.png'} height="25"/> 
                          Internet Wi-fi em todas as áreas públicas </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Sacada </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-air-conditioner.png'} height="25"/> 
                          Ar-Condicionado</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-telephone.png'} height="25"/> 
                          Telefone</li>

                    </ul>

                  </div>
                  <div className="section-wrapper-item">
                    

                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-pool.png'} height="25"/> 
                          Visite para a piscina </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-tv.png'} height="25"/> 
                          TV </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-minibar.png'} height="25"/> 
                          Frigobar</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-curtain.png'} height="25"/> 
                          Cortina e Blackout</li>

                    </ul>


                  </div>
              </div>
            </div>
            


            <Section_Midias />
            <Footer />
            <Motor />



        </>
      );
}
