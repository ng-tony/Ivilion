import Card from "react-bootstrap/esm/Card";
import Underline from "./Underline";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/Container";

const Contact = () => (
  <Card
    style={{
      width: "661px",
      margin: "auto",
    }}
  >
    <Card.Body>
      <Card.Title>Contact Us</Card.Title>
      <Card.Subtitle>info@ivilon.com</Card.Subtitle>
      <Underline width="40px" />
      <form>
        <div class="form-group">
          <Container justify-center>
            <Row>
              <Col>
                <input className="contact-text-input" type="text" id="firstName" placeholder="First Name" />
              </Col>
              <Col>
                <input className="contact-text-input" type="text" id="lastName" placeholder="Last Name" />
              </Col>
            </Row>
            <Row>
              <Col>
                <input className="contact-text-input" type="email" id="email" placeholder="Email" />
              </Col>
              <Col>
                <input className="contact-text-input" type="text" id="orderNum" placeholder="Order Number" />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="textarea"
                  id="firstName"
                  placeholder="Type you message here..."
                />
              </Col>
              <Col>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </form>
    </Card.Body>
  </Card>
);
export default Contact;
