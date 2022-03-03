import { Link } from "react-router-dom";
import styled from "styled-components";
import { thirteenPro ,thirteenmin , thirteenProMax , elevenproMax } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${elevenproMax({ height: "40vh" })}
  ${thirteenPro({ height: "40vh" })}
  ${thirteenProMax({ height: "40vh" })}
  ${thirteenmin({ height: "40vh" })}
`;

const Info = styled.h1`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size : 24px;
  justify-content: center;
`;
const Title = styled.div`
  color: white;
  margin-bottom: 17px;
  background: #100f66;
  border-radius : 5px;
`;
const Button = styled.button`
border: none;
padding: 10px;
background-color : white;
color: grey;
cursor : pointer;
font-weight: 600;

`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`} >
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
