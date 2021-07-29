import Card from "react-bootstrap/Card";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";

const CatalogueCard = ({ name, imgUrl }) => {
  const [hover, setHover] = useState(false);
  const hoverIn = () => {
    setHover(true);
  };
  const hoverOut = () => {
    setHover(false);
  };
  return (
    <Card onMouseEnter={hoverIn} onMouseLeave={hoverOut} style={{
      boxShadow: "1px 1px 3px 0.1px rgba(0, 0, 0, 0.4)"
    }}>
      <Container>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{
          marginTop: "0px", 
          height:"178px",
          width:"178px",
          transition: "0.3s",
          opacity: hover ? "0" : "1",
        }}
      />
      <Card.Title style={{
        height: "80px"
      }}>{name}</Card.Title>
      </Container>
    </Card>
  );
};

export default CatalogueCard;
