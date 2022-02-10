import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 90px;
  ${mobile({ height: "50px" })}

`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-top : -0.4rem;
  // border : 2px solid blue;
  // font-weight: bold;
  // ${mobile({ fontSize: "24px" })}
`;
const Center = styled.div`
  flex: 1;
  diplay : flex;

`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 6px;
  justify-content : space-between;
  margin-top : -2rem;

`;
const Input = styled.input`
  border: none;
  width : 100%;
  ${mobile({ width: "50px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top : -2rem;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo src="https://i.ibb.co/FwPnxHN/logo.png"/>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="search Product" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
          {/* <Language>En</Language> */}
        </Center>
        <Right>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>Sign IN</MenuItem>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
