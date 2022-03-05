import { Swiper, SwiperSlide } from 'swiper/react';
import PageHeader from "../../components/Header/pageHeader";
import PageTitle from "../../components/Header/pageTitle";
import Section_Midias from "../../components/Section/Midias";
import Footer from "../../components/Rodape";
import Motor from '../../components/Motor';
import './style.css';

export default function Passeios(){
    return(
    <>
        <PageHeader />
        <PageTitle 
        title="Passeios Amazônicos"
        description="Texto" />
    


        <div className="page-section-content">
            <div className="page-section-container">
                <Swiper
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="250px" /> </SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="250px" /> </SwiperSlide>
                </Swiper>
            </div>


            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/1.jpg'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Nascer e pôr do sol</div>     
                    <div className="section-wrapper-item-description">
                        <p>Relaxe e aprecie o nascer e pôr-do-sol em completa imersão com a natureza.</p>
                    </div>
                    
                </div>   
                
            </div> 


            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Nascer e pôr do sol</div>     
                    <div className="section-wrapper-item-description">
                        <p>Relaxe e aprecie o nascer e pôr-do-sol em completa imersão com a natureza.</p>
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/1.jpg'}/> 
                    </div>
                </div>   
                

                
            </div> 

            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/1.jpg'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Nascer e pôr do sol</div>     
                    <div className="section-wrapper-item-description">
                        <p>Relaxe e aprecie o nascer e pôr-do-sol em completa imersão com a natureza.</p>
                    </div>
                    
                </div>   
                
            </div> 

            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Nascer e pôr do sol</div>     
                    <div className="section-wrapper-item-description">
                        <p>Relaxe e aprecie o nascer e pôr-do-sol em completa imersão com a natureza.</p>
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/1.jpg'}/> 
                    </div>
                </div>   
                

                
            </div> 


        </div>

        <Section_Midias />
        <Footer />
        <Motor />

    </>
    );
}