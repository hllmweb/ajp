import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section_Midias from './../Section/Midias';
import Footer from './../Rodape';
import Motor from '../Motor';
import './style.css';
import 'swiper/css';


function Content(){
    return(
        <>
            <div className="page-content">
                <div className="section-container">



                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Superior</div>     
                            <div className="section-wrapper-item-description">
                                <p>Nossa Suíte Superior conta com cama Queen Size e wi-fi. 
                                O Hotel possui berços (sujeito a disponibilidade) para acomodar um bebê junto com os 
                                pais no apartamento.</p>
                                <p>
                                    <Link className="btn" to="/acomodacoes/suite_junior">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to="#">Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                    </div> 



                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                        
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Superior</div>     
                            <div className="section-wrapper-item-description">
                                <p>Nossa Suíte Superior conta com cama Queen Size e wi-fi. 
                                O Hotel possui berços (sujeito a disponibilidade) para acomodar um bebê junto com os 
                                pais no apartamento.</p>
                                <p>
                                    <Link className="btn" to="#">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to="#">Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        
                    </div> 






                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Superior</div>     
                            <div className="section-wrapper-item-description">
                                <p>Nossa Suíte Superior conta com cama Queen Size e wi-fi. 
                                O Hotel possui berços (sujeito a disponibilidade) para acomodar um bebê junto com os 
                                pais no apartamento.</p>
                                <p>
                                    <Link className="btn" to="#">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to="#">Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                    </div>





                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                        
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Superior</div>     
                            <div className="section-wrapper-item-description">
                                <p>Nossa Suíte Superior conta com cama Queen Size e wi-fi. 
                                O Hotel possui berços (sujeito a disponibilidade) para acomodar um bebê junto com os 
                                pais no apartamento.</p>
                                <p>
                                    <Link className="btn" to="#">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to="#">Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        
                    </div> 





                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Superior</div>     
                            <div className="section-wrapper-item-description">
                                <p>Nossa Suíte Superior conta com cama Queen Size e wi-fi. 
                                O Hotel possui berços (sujeito a disponibilidade) para acomodar um bebê junto com os 
                                pais no apartamento.</p>
                                <p>
                                    <Link className="btn" to="#">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to="#">Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                    </div>




                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/superior-1.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                        
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Superior</div>     
                            <div className="section-wrapper-item-description">
                                <p>Nossa Suíte Superior conta com cama Queen Size e wi-fi. 
                                O Hotel possui berços (sujeito a disponibilidade) para acomodar um bebê junto com os 
                                pais no apartamento.</p>
                                <p>
                                    <Link className="btn" to="#">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to="#">Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        
                    </div> 




                </div>
            </div>

            <Motor />
            <Section_Midias />
            <Footer />
        </>
    );
}

export default Content;