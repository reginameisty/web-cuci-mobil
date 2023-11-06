import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";

const Testimonial = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial" data-aos="fade-up" 
                  data-aos-duration="1000">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Semua Testimonial</h1>
              <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, adipisci.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return <Col key={data.id} className="mb-5 shadow-sm" >
                <div className="people">
                  <img src={data.image} alt="" />
                  <div>
                    <h5>{data.name}</h5>
                  </div>
                </div>
                <p className="desc mt-4">{data.desc}</p>
              </Col>
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Testimonial
