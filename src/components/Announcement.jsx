import styled from "styled-components"
import {thirteenPro ,thirteenmin , thirteenProMax , elevenproMax } from "../responsive";

const Container = styled.div `
height : 30px;
background-color : #100f66;
color: white;
display : flex;
align-items: center;
justify-content : center;
font-size: 14px;
font-weight: 500;
${thirteenProMax({ display : "none"})}
${thirteenPro({ display : "none" })}
${thirteenmin({  display : "none" })}
${elevenproMax({  display : "none" })}
`;
const Announcement = () => {
  return (
    <Container>
      Super Deal! DISCOUNT ON EVERY PRODUCT -30%
    </Container>
  )
}

export default Announcement
