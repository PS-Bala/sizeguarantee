import React from "react";
import {
  Box2,
  Layer1,
  Layer2,
  SizeBox,
  SizeBoxContainer,
} from "./../../styledComponents/StyledComponents";

function ProductCard(props) {
  const { id, img, inStore, price, size, productName, onSelect } = props;

  return (
    <Box2 className="product-box" onClick={() => onSelect(props)}>
      <Layer1 src={img} alt="pics" className="product-img" />
      <Layer2 className="product-desc">
        <p>{productName}</p>
        <p>Available Size :</p>
        <SizeBoxContainer>
          <SizeBox>
            <p style={{ marginTop: "10px" }}>S</p>
          </SizeBox>
          <SizeBox>
            <p style={{ marginTop: "10px" }}>M</p>
          </SizeBox>
          <SizeBox>
            <p style={{ marginTop: "10px" }}>L</p>
          </SizeBox>
          <SizeBox>
            <p style={{ marginTop: "10px" }}>XL</p>
          </SizeBox>
        </SizeBoxContainer>
        <p>Price -₹ 122</p>
      </Layer2>
    </Box2>
  );
}

export default ProductCard;
