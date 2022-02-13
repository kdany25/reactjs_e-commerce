import { Send } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { addSub } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
  height: 30vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 70px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: green;
  color: white;
`;

const Newsletter = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const ss = { ...inputs };
    addSub(ss, dispatch);
  }

  return (
    <Container>
      <Title>Subscribe</Title>
      <Desc>Get updates on new Arrival Products</Desc>
      <InputContainer>
        <Input name="email" placeholder="Your Email" onChange={handleChange} />
        <Button onClick={handleClick}>
          <Send  />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
