import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Order from "../components/Order/Order";
import { RemoveProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
  height: 100vh;
  margin-bottom: 20rem;
`;

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  height: 45vh;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ca6b34;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 5px;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(RemoveProduct({ product }));
  };

  return (
    <>
      <Container>
        {modalOpen && <Order setOpenModal={setModalOpen} cart={cart} />}

        <Announcement />
        <Navbar />
        <Wrapper>
          <Title>CART</Title>

          <Bottom>
            <Info>
              {cart.products.map((product, index) => (
                <Product key={index}>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add onClick={product.quantity + 1} />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove onClick={product.quantity - 1} />
                    </ProductAmountContainer>
                    <ProductPrice>
                      Rwf {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>{cart.total} Rwf</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>
                  Estimated Time Shipping (Kigali)
                </SummaryItemText>
                <SummaryItemPrice>40 min</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Fee</SummaryItemText>
                <SummaryItemPrice>Free</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice> {cart.total} Rwf</SummaryItemPrice>
              </SummaryItem>

              <Button
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                CHECKOUT NOW
              </Button>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Cart;
