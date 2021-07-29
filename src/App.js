import "./App.scss";
import logo from "./img/logo.webp";
import Underline from "./Underline"
import ItemCard from "./ItemCard";
import Contact from "./Contact"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Socials from "./Socials";
import items from "./items"
import catalogues from "./catalogues";
import machinery from "./img/machinery.mp4";
import Card from "react-bootstrap/esm/Card";
import CatalogueCard from "./CatalogueCard";



function App() {
  return (
    <div className="App">
      <Jumbotron id="main-jumbotron">
        <Container id="main-jumbotron-content">
          <img src={logo} alt="ivilon" />
          <Socials
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          />
        </Container>
      </Jumbotron>
      
      <Container >
        <Jumbotron id="second-jumbotron" className="bg-primary">
          <h4 className="display-6">SHOP OUR COLLECTION</h4>
          <Underline width="79px" />
          <p className="display-7 text-secondary">
            our collection of curtain hardware we
            <br /> design with passion{" "}
          </p>
        </Jumbotron>
        <div className="section item-catalogue">
        <Row className="items-catalogue no-gutters">
          {items.map((item, i) => (
            <Col sm={4} className="no-gutters">
              <ItemCard
                key={i}
                name={item.name}
                price={item.price}
                imgUrl={item.imgUrl}
                itemUrl={item.itemUrl}
              />
            </Col>
          ))}
        </Row>
        </div>
      </Container>

      <div className="video-container">
        <Card className="video-card">
          <Card.Body>
          <Container fluid >
          <Row className="justify-content-sm-center py-5">
          <Col sm={9}>
            <Card.Title className="about-us-title display-6">ABOUT US</Card.Title>
            <Underline width="40px" />
            
            <Card.Text className="about-us-text">
              <p>
                ​We are a reputed firm engaged in retailing and distributing a
                wide range of curtain rods and window hardware.
              </p>
              <p>
                With our valuable experience of 15 years in the domain, our
                products are known for their superior durability, easy
                installation and perfect finish, which are suitable to be
                installed at commercial and domestic establishments. We
                manufacture these products using premium grade raw material as
                per the set industrial standards. Our range of curtain rods
                enhances the beauty of interiors of households, hotels, offices,
                showroom, and houses.
              </p>
            </Card.Text>
            </Col>
            </Row>
            </Container>
          </Card.Body>
        </Card>
        <video muted autoPlay loop>
          <source src={machinery} type="video/mp4" />
        </video>
      </div>
      
      <div className="section section-other-catalogues">
        <Container>
          <Row >
              {catalogues.map((catalogue, index) => (
                <Col sm={4} className="px-4">
                <CatalogueCard name={catalogue.name} imgUrl={catalogue.imgUrl}/>
                </Col>
              ))}
            
          </Row>
        </Container>
      </div>

      <div className="section section-contact-us">
        <Contact/>
      </div>
      <div className="section section-footer">
        <Socials size={30} spacing="px-2"/>
        <p className="footer-text">2016 Created By Ivilon</p>
      </div>
                
    </div>
  );
}

export default App;
