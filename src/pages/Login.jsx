import styled from "styled-components";
import { mobile ,thirteenPro ,thirteenmin , thirteenProMax , elevenproMax } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../redux/apiCalls";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://i.ibb.co/t8C1bC3/An-aerial-of-Kigali-Convention-Center-on-June-19-2019-Photo-by-Emmanuel-Kwizera.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius : 20px;
  ${mobile({ width: "75%" })};
  ${thirteenmin({ width: "75%" })};
  ${thirteenPro({ width: "75%" })};
  ${thirteenProMax({ width: "75%" })};
  ${elevenproMax({ width: "75%" })};
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align : center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: green;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
  border-radius : 10px;
  margin-left :   6rem;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <Container>
      
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
         <Button onClick={handleClick} disabled={isFetching}>
          LOGIN
        </Button>
        {error && <Error>Invalid credintials...</Error>}
        <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  );
};

export default Login;