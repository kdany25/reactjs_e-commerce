import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Tit = styled.h1`
width: 100%; 
text-align: center; 
border-bottom: 1px solid #000; 
line-height: 0.1em;
margin: 10px 0 20px; 
margin-top: 2rem;
margin-left : 1.5rem;
margin-right : 1.5rem;
`;

const Sp = styled.span`
background:#fff; 
    padding:0 10px; 
`;

const Categories = () => {
  return (
    <>

    <Container>

      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};

export default Categories;
