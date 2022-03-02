import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile ,thirteenPro ,thirteenmin , thirteenProMax } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
  ${thirteenmin({ padding: "0px", flexDirection: "column" })}
  ${thirteenPro({ padding: "0px", flexDirection: "column" })}
  ${thirteenProMax({ padding: "0px", flexDirection: "column" })}
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
