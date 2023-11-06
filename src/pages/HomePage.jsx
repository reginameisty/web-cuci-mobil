import { Container, Row, Col } from "react-bootstrap";
import CuciImage from '../assets/img/cuci.png'

import {LapakTerbaru, dataSwiper} from '../data/index'
import {useNavigate} from "react-router-dom";
// import Faq from "../components/Faq";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
    let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
            <Row className="header-box d-flex align-items-center pt-lg-5" data-aos="fade-up" 
                  data-aos-duration="1000">
                <Col lg="6">
                    <h1 className="mb-4"> Temukan Tempat <br/><span> Cuci Mobil </span><br/> Terdekat Dari Rumah!</h1>
                    <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. 
                    Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?</p>
                    <button className="btn btn-danger btn-lg rounded-1" 
                    onClick={() => navigate("/login")}>Login</button>
                </Col>
                <Col lg="6" className="pt-lg-0 pt-5">
                <img src={CuciImage} alt="cuci-img"  />
                </Col>
            </Row>
        </Container>
      </header>
      <div className="lapak w-100 min-vh-100" data-aos="fade-up"
        data-aos-duration="1000">
        <Container>
            <Row>
                <Col>
                <h1 className="text-center fw-bold mt-5">Lapak Terbaru</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </Col>
            </Row>
            <Row>
                {LapakTerbaru.map((lapak) => {
                    return (
                    <Col key={lapak.id} className="shadow rounded" data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay={lapak.delay}>
                        <img src={lapak.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                        <div className="star mb-2 px-3">
                            <i className={lapak.star1}></i>
                            <i className={lapak.star2}></i>
                            <i className={lapak.star3}></i>
                            <i className={lapak.star4}></i>
                            <i className={lapak.star5}></i>
                        </div>
                        <h5 className="mb-5 px-3">{lapak.title}</h5>
                        <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                            <p className="m-0 text-primary fw-bold">{lapak.price}</p>
                            <button className="btn btn-danger rounded-1">{lapak.detail}</button>
                        </div>
                    </Col>
                    );
                })}
            </Row>
            <Row>
                <Col className="text-center">
                    <button className="btn btn-info rounded-5 btn-lg" data-aos="fade-up"
                    data-aos-duration="3000" onClick={() => navigate("/lapak")}>
                    Lihat Lapak Lainnya<i className="fa-solid fa-chevron-right ms-1"></i>
                    </button>
                </Col>
            </Row>
        </Container>
        </div>
        <div className="testimonial py-5" data-aos="fade-up"
        data-aos-duration="1000">
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-center fw-bold my-5">Testimonial</h1>
                    </Col>
                </Row>
                <Row>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {dataSwiper.map((data) => {
                            return <SwiperSlide key={data.id} className="shadow rounded">
                                <div className="people">
                                    <img src={data.image} alt="" />
                                    <div>
                                        <h5>{data.name}</h5>
                                    </div>
                                </div>
                                <p className="desc mt-4">{data.desc}</p>
                            </SwiperSlide>
                        })}
                        
                    </Swiper>
                </Row>
            </Container>
        </div>

        {/* SECTION FAQ */}
        {/* <Faq/> */}
    </div>
  );
};

export default HomePage
