import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  WhatsApp
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Lefts = styled.div`
  flex: 1;
  display: flex;
  padding: 30px;
`;
const Logo = styled.img`
  width: 65px;
  height: 65px;
  object-fit: cover;
  margin-top: -0.4rem;
  ${mobile({ fontSize: "24px" })}
`;

const Logoo = styled.img`
  width: 50px;
  height: 30px;
  margin-top : -30px;
  ${mobile({ fontSize: "24px" })}
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Centers = styled.div`
  flex: 1;
  padding: 20px;
  margin-left : -10rem;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  display: flex;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const Rights = styled.div`
  flex: 1;
  padding: 20px;
  margin-left : 30rem;
  font-size : 12px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Foo = styled.div`
  display: flex;
  height : 40px;
`;

const Titles = styled.h3`
  font-size : 15px;
  margin-top : -10px;
`;
const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Link to={`/`}>
            <Logo src="https://i.ibb.co/9qPTq4M/Untitled-4-copy.png" />
          </Link>
          <Desc>
            To build a local online store with all Rwanda’s imports, where
            people can find anything they might want to buy online.
          </Desc>
          <SocialContainer>
            <Link
              to={{ pathname: "https://www.instagram.com/myclikk_rwanda/" }}
              target="_blank"
            >
              <SocialIcon color="3B5999">
                <Facebook />
              </SocialIcon>
            </Link>
            <Link
              to={{ pathname: "https://www.instagram.com/myclikk_rwanda/" }}
              target="_blank"
            >
              <SocialIcon color="E4405F">
                <Instagram />
              </SocialIcon>
            </Link>
            <Link
              to={{ pathname: "https://www.instagram.com/myclikk_rwanda/" }}
              target="_blank"
            >
              <SocialIcon color="55ACEE">
                <Twitter />
              </SocialIcon>
            </Link>
            <Link
              to={{ pathname: "https://wa.me/+250785918849" }}
              target="_blank"
            >
              <SocialIcon color= "05a535">
                <WhatsApp />
              </SocialIcon>
            </Link>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <Link to="/" style={{ color: "black" }}>
              <ListItem>Home</ListItem>
            </Link>
            <Link to="/cart" style={{ color: "black" }}>
              <ListItem>Cart</ListItem>
            </Link>
            <Link to="/products" style={{ color: "black" }}>
              <ListItem>Products</ListItem>
            </Link>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />
            Kigali,Rwanda
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} />
            +250788730199
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />
            habzkamu@myclikk.rw
          </ContactItem>
        </Right>
      </Container>
      <Foo>
        <Lefts>
          <Titles>We accept</Titles>
          <Link to={`/`}>
         <Logoo src="https://i.ibb.co/BqkQ95s/28-280270-mtn-ghana-records-gh-u00a256b-in-mobile-money.jpg" />
          </Link>
        </Lefts>
        <Rights>
        copyright 2022 Myclikk-All Right reserved
        </Rights>
      
      </Foo>
    </>
  );
};

export default Footer;
