import { useState } from "react";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "../data";
import {
  mobile,
  thirteenPro,
  thirteenmin,
  thirteenProMax,
} from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: -1rem;
  ${mobile({ height: "15vh", margintop: "2rem" })}
  ${thirteenmin({ height: "15vh", margintop: "2rem" })}
  ${thirteenPro({ height: "15vh", margintop: "2rem" })}
  ${thirteenProMax({ height: "15vh", margintop: "2rem" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
  color: green;
  ${thirteenProMax({ height: "15px", width: "15px" })}
  ${thirteenmin({ height: "15px", width: "15px" })}
  ${thirteenPro({ height: "15px", width: "15px" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  ${thirteenProMax({ height: " 90%" })}
  ${thirteenmin({ height: " 90%" })}
  ${thirteenPro({ height: " 90%" })}
  ${mobile({ height: " 90%" })}
`;

const Slide = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
  ${thirteenProMax({ height: "15vh" })}
  ${thirteenPro({ height: "15vh" })}
  ${thirteenmin({ height: "15vh" })}
  ${mobile({ height: "15vh" })}
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  ${thirteenProMax({ height: " 80%", flex: "1" })}
  ${thirteenPro({ height: " 80%", flex: "1" })}
  ${thirteenmin({ height: " 80%", flex: "1" })}
  ${mobile({ height: " 80%", flex: "1" })}
`;
const Image = styled.img`
  height: 100%;
  ${thirteenProMax({ height: "100%" })}
  ${thirteenPro({ height: "100%" })}
  ${thirteenmin({ height: "100%" })}
  ${mobile({ height: "100%" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${thirteenProMax({ padding: "0px", flex: "2 " })}
  ${thirteenPro({ padding: "0px", flex: "2 " })}
  ${thirteenmin({ padding: "0px", flex: "2 " })}
  ${mobile({ padding: "0px", flex: "2 " })}
`;
const Title = styled.h1`
  font-size: 30px;
  ${thirteenProMax({ fontSize: "13px" })}
  ${thirteenPro({ fontSize: "13px" })}
  ${thirteenmin({ fontSize: "13px" })}
  ${mobile({ fontSize: "13px" })}
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
  ${thirteenProMax({
    fontSize: "9px",
    fontweight: "300",
    letterspacing: "1px",
    margin: "5px",
  })}
  ${thirteenPro({
    fontSize: "9px",
    fontweight: "300",
    letterspacing: "1px",
    margin: "5px",
  })}
  ${thirteenmin({
    fontSize: "9px",
    fontweight: "300",
    letterspacing: "1px",
    margin: "5px",
  })}
  ${mobile({
    fontSize: "9px",
    fontweight: "300",
    letterspacing: "1px",
    margin: "5px",
  })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${thirteenProMax({ fontSize: "11px", padding: "0px" })}
  ${thirteenmin({ fontSize: "11px", padding: "0px" })}
  ${thirteenPro({ fontSize: "11px", padding: "0px" })}
  ${mobile({ fontSize: "11px", padding: "0px" })}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleclick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleclick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="/products">
                <Button>SHOP NOW get 30% off</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleclick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
