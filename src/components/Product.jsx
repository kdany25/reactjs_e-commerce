import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 1rem;
  min-width: 280px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  // -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 12px -10px rgba(0, 0, 0, 1);
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
  margin-bottom: 1rem;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: #41f1b6 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: e9f5f5;
    transform: scale (1.1);
  }
`;

const Iconn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: e9f5f5;
    transform: scale (1.1);
  }
`;

const Cons = styled.div`
  display: flex;
`;

const Price = styled.div`
  margin-left: 1rem;
  font-weight: 600;
`;

const Name = styled.div`
  font-weight: 600;
  margin-left: 0rem;
`;

const Below = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Rat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Below>
        <Name>{item.title}</Name>
        <Price>{item.price}rwf</Price>
      </Below>
      <Rat>
        <Rating rating="3.5" numReviews="120"></Rating>
      </Rat>
      <Cons>
        <Icon>
          <Link to={`/product/${item._id}`} style={{ color: "red" }}>
            <ShoppingCartOutlined />
          </Link>
        </Icon>
        <Iconn>
          <FavoriteBorderOutlined />
        </Iconn>
      </Cons>
    </Container>
  );
};

export default Product;
