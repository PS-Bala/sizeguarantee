import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  display: ${(props) => (props.hide ? "none" : "flex")};
`;
