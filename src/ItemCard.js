import Card from "react-bootstrap/Card";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import primeLogo from "./img/prime-logo.svg"

const PrimeLogo = () => {
  console.log(primeLogo);
  return (<div style={{
    marginLeft: "5px",
    display:"inline-block",
    position: "relative",
    width: "45px",
    top: "4px",
    height: "18px",
    backgroundSize: "45px 18px",
    backgroundImage: `url(${primeLogo})`,
  }}>
  </div>
  )
}

const Button = ({ href, hoverIn, hoverOut, hover }) => (
  <div
    className="button"
    onMouseEnter={hoverIn}
    onMouseLeave={hoverOut}
    style={{
      height: "41px",
      width: "224px",
      margin: "auto",
      boxShadow: hover
        ? "0px 0px 0px 3px rgb(47, 46, 46)"
        : "0px 0px 0px 1px rgb(47, 46, 46)",
      // borderWidth: "1px",
      // outline: "solid 1px rgb(47, 46, 46)",
      // outlineWidth: hover ? "3px" : "1px",
      // outlineOffset: "0px"
      // borderStyle: "solid",
      // borderWidth: hover ? "3px" : "1px",
      // borderColor: "rgb(47, 46, 46)",
    }}
  >
    <a
      href={href}
      style={{
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <p style={{ lineHeight: "41px" }}>Buy now on Amazon</p>
    </a>
  </div>
);

const ItemCard = ({ name, price, itemUrl, imgUrl }) => {
  const [hover, setHover] = useState(false);
  const hoverIn = () => {
    setHover(true);
  };
  const hoverOut = () => {
    setHover(false);
  };
  return (
    <div className="itemCard" style={{ width: "280px", paddingBottom: "0px", marginBottom:"40px" }}>
      <Card className="item-card " style={{ border: "none" }}>
        <a
          href={itemUrl}
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <div
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
            className="img-box"
            style={{ width: "280px", height: "280px" }}
          >
            <Card.Img
              variant="top"
              src={imgUrl}
              style={{ marginTop: "70px" }}
            />

            <div
              className="color-availability"
              style={{
                backgroundColor: "rgb(47, 46, 46)",

                color: "white",
                height: "57px",
                lineHeight: "57px",

                position: "relative",
                width: "100%",
                zIndex: "10",
                bottom: hover ? "-24px" : "-81px",

                transition: "all .7s ease-out",
              }}
            >
              AVAILABLE IN MORE OPTIONS
            </div>
          </div>
        </a>
        <Card.Body
          className="bg-primary"
          style={{ zIndex: 20, height: "230px" }}
        >
          <Container fluid style={{height:"100%", padding:"15px 0px"}}>
            <Row className="h-100">
              <Card.Text
                style={{
                  fontSize: "15px",
                }}
              >
                {name}
              </Card.Text>

              <Card.Text
                style={{

                  fontSize: "15px",
                }}
              >
                {price ? <div>${price} <PrimeLogo/></div>  : "View price on Amazon"}
              </Card.Text>

              <Button
                variant="primary"
                href={itemUrl}
                hover={hover}
                hoverIn={hoverIn}
                hoverOut={hoverOut}
              >
                Buy now on Amazon
              </Button>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
