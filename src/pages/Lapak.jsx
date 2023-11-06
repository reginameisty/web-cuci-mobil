import { Container, Row, Col } from "react-bootstrap";
import {semuaLapak} from "../data/index";
// import {useState, useEffect} from 'react';


  const Lapak = () => {
    return (
      <div className="lapak-page">
        <div className="lapak min-vh-100" data-aos="fade-up" 
        data-aos-duration="1000">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold text-center animate__animated animate__fadeInUp">Semua Lapak</h1>
                <p className="text-center animate_animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
            </Row>
            <Row>
              {semuaLapak.map((lapak) => {
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
          </Container>
        </div>
      </div>
    )
  }

export default Lapak
