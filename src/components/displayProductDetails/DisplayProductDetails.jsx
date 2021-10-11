import React from "react";
import {
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
} from "./DisplayProductDetails.style";
import {
  Box3,
  LargeImage,
  Layer2,
  SizeBox,
  SizeBoxContainer,
} from "../../styledComponents/StyledComponents";

function DisplayProductDetails({
  img,
  inStore,
  price,
  size,
  productName,
  onBack,
  onContinue,
}) {
  return (
    <Box3 className="product-details-box">
      {/* <div class="left-right-div">
        <button className="back" onClick={onBack}>
          Back
        </button>
        <button className="continue" onClick={onContinue}>
          Continue
        </button>
      </div> */}
      <LargeImage
        src={img}
        alt="pics"
        className="product-img"
        height="300"
        width="300"
      />
      <Layer2 className="product-desc">
        <p>Test</p>
        <p>Price : ₹ 122</p>
        <p>Gender: Men</p>
        <p>Available Sizes :</p>
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
        <ButtonContainer>
          <SecondaryButton onClick={onBack}>cancel</SecondaryButton>
          <PrimaryButton>Know Your Size</PrimaryButton>
        </ButtonContainer>
      </Layer2>
    </Box3>
  );
}

export default DisplayProductDetails;
