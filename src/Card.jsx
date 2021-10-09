import axios from "axios";
import React from "react";
import styled from "styled-components";


export const Card = ({ img, inStore, discountVal ,discount,storeName }) => {
  return <Box img={img} >
    {inStore ? <Header style={{backgroundColor:'#000', color:'#fff'}}> In-Store </Header> : null}
    {discount ? <Discount style={{backgroundColor:'#fff', color:'#333'}}>${discountVal}</Discount> : null}
    <Title>
      {" "}
      <p className="m-l">{storeName}</p> <p className="m-r"><img width="35px" src="https://site-assets.afterpay.com/media/W1siZiIsIjIwMTcvMDUvMjMvMTIvNTkvMjQvMDI4YTE3YTQtZWE2Zi00MGU1LWI2YWQtZGMwZTcyMDk1NWZjL0JDRi1Mb2dvX1doaXRlLnBuZyJdLFsicCIsIm5lZ2F0ZV9sb2dvIiwiMjUweDI1MCJdXQ?sha=8af6241e70877447"></img></p>
    </Title>
  </Box>
};

export const Card1 = ({ img, inStore, price ,size,productName }) => (
  // <Box img={img}>
  //   {inStore ? <Header> In-Store </Header> : null}
  //   {/* {discount ? <Discount>${discountVal}</Discount> : null} */}
  //   <Title>
  //     {" "}
  //     <p className="m-l">Price: ${price}</p> <p className="m-r">Size: {size}</p>
  //   </Title>
  // </Box>
  <Box2 class="product-box">
    <Layer1 src={img} alt='pics' class="product-img"/>
    <Layer2 class="product-desc">
    <p>{productName}</p>
    <p>Available Size :</p>
    <SizeBoxContainer>
  <SizeBox>
    <p style={{marginTop:'10px'}}>S</p>
  </SizeBox>
  <SizeBox>
    <p style={{marginTop:'10px'}}>M</p>
  </SizeBox>
  <SizeBox>
    <p style={{marginTop:'10px'}}>L</p>
  </SizeBox>
  <SizeBox>
    <p style={{marginTop:'10px'}}>XL</p>
  </SizeBox>
    </SizeBoxContainer>
    <p>Price -₹ 122</p>
    </Layer2>
  </Box2>
);

export const Card2 = ({ img, inStore, price ,size, productName }) => (
  // <Box img={img}>
  //   {inStore ? <Header> In-Store </Header> : null}
  //   {/* {discount ? <Discount>${discountVal}</Discount> : null} */}
  //   <Title>
  //     {" "}
  //     <p className="m-l">Price: ${price}</p> <p className="m-r">Size: {size}</p>
  //   </Title>
  // </Box>
  <Box3 class="product-box">
    <Layer1 src={img} alt='pics' class="product-img"/>
    <Layer2 class="product-desc">
    <p>Test</p>
    <p>Price : ₹ 122</p>
    <p>Gender: Men</p>    
    <p>Available Sizes :</p>
    <SizeBoxContainer>
  <SizeBox>
    <p style={{marginTop:'10px'}}>S</p>
  </SizeBox>
  <SizeBox>
    <p style={{marginTop:'10px'}}>M</p>
  </SizeBox>
  <SizeBox>
    <p style={{marginTop:'10px'}}>L</p>
  </SizeBox>
  <SizeBox>
    <p style={{marginTop:'10px'}}>XL</p>
  </SizeBox>
    </SizeBoxContainer>
    <button style={{float:'left', marginLeft:'10px', background:'blue', padding:'10px', borderRadius:'5px', color:'#fff'}}>Know Your Size</button>
    </Layer2>
  </Box3>
);

export const Card4 = ({ img, inStore, price ,size }) => (
  // <ProductViewDiv className="produvt-box">
  // <Layer1l className="left-img">Left</Layer1l>
  // <Layer2l className="right-img">Right</Layer2l>
  // </ProductViewDiv>
  <div class="left-right-div">
     <button className={"back"}> Back </button>
     <button className={"continue"} >Continue</button>
</div>

  );
const ProductViewDiv = styled.div `
height: 80%;
  width: 70%;
  margin: 20px;
  position: relative;
  border-radius: 14px;
display:flex;
flex-direction:row;
justify-content: space-between;
border: 1px solid #ddd;

`; 
const Layer1l = styled.div`
height: 49%;
width: 100%;
border-radius: 6px 0 0 6px;
`
const Layer2l = styled.div`
  border-radius:0 6px 6px 0;
  display: block;
  width: 100%;
  height: 45%;
`
const Box3 = styled.div`
  height: 80%;
  width: 70%;
  margin: 20px;
  position: relative;
  border-radius: 14px;
  display: block;
  flex-direction:row;
  border: 1px solid #ddd;
  `;
const Box2 = styled.div`
  height: 350px;
  width: 13%;
  margin: 20px;
  position: relative;
  border-radius: 14px;
  display: block;
  flex-direction:column;
  border: 1px solid #ddd;
  `;

const Layer1 = styled.img`
height: 49%;
width: 100%;
border-radius: 6px 0 0 6px;
`
const Layer2 = styled.div`
  border-radius:0 6px 6px 0;
  display: block;
  width: 100%;
  height: 45%;
`
const SizeBoxContainer = styled.div`
height:auto;
  /* display:flex;
 justify-content:space-between; */
`

const SizeBox = styled.div`
height: 30px;
    width: 30px;
    line-height: 10px;
    margin-right: 10px;
 border:1px solid black;
 border-radius:50%;
 display:flex;
 float:left;
`



const Box = styled.div`
  height: 250px;
  width: 250px;
  margin: 20px;
  position: relative;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid black;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-color: #ccc;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  position: absolute;
  height: 50px;
  width: 90%;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-content: space-around;
  border: 1px solid black;
  bottom: 20px;
  background:#fff;
  color:#000;
`;

const Header = styled.div`
  position: absolute;
  height: 30px;
  width: 30%;
  display: flex;
  border: 1px solid black;
  left: 10px;
  top: 20px;
  border-radius: 14px;
  justify-content: center;
  align-content: center;
`;

const Discount = styled.div`
  position: absolute;
  height: 30px;
  width: 30%;
  display: flex;
  border: 1px solid black;
  left: 10px;
  top: 60px;
  border-radius: 14px;
  justify-content: center;
  align-content: center;
`;

/** To make api call */
 // React.useEffect(()=>{
  //   axios.get('https://reqres.in/users').then(req=>console.log(req)).catch(err=>console.log('errrrrrrrr'))
  // },[])