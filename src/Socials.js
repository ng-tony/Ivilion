import fb from "./img/fb-icon.webp"
import pi from "./img/pi-icon.webp"
import ig from "./img/ig-icon.webp"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
const SocialButton = ({url, img, size}) => (
//   <a href={url}>
    <img src={img} alt="x" style={{height:size ? size : "40px", width:size ? size : "40px"}}/>
//   </a>
)

const buttons = [
    {url: "#", img:fb},
    {url: "#", img:pi},
    {url: "#", img:ig},
]
const Socials = ({style, spacing, size}) => {
    console.log(buttons)
    return (<div className="socials" style={style}>
    <Container>
    <Row>
    {buttons.map((button, i) => (
        <Col className={spacing ? spacing : "px-2"}>
            <SocialButton url={button.url} img={button.img} size={size} />
            </Col>
       ))
    }
    </Row>
    </Container>
       </div>
    )
}

export default Socials;