import styled from "styled-components";

export const ProductViewDiv = styled.div`
  height: 80%;
  width: 70%;
  margin: 20px;
  position: relative;
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #ddd;
`;
export const Layer1l = styled.div`
  height: 49%;
  width: 100%;
  border-radius: 6px 0 0 6px;
`;
export const Layer2l = styled.div`
  border-radius: 0 6px 6px 0;
  display: block;
  width: 100%;
  height: 45%;
`;
export const Box3 = styled.div`
  width: 100%;
  margin: 20px;
  position: relative;
  border-radius: 14px;
  display: block;
  border: 1px solid #ddd;
  background-color: #ffffff;
`;
export const Box2 = styled.div`
  height: 350px;
  width: 200px;
  margin: 20px;
  position: relative;
  border-radius: 14px;
  display: block;
  flex-direction: column;
  border: 1px solid #ddd;
`;

export const Layer1 = styled.img`
  height: 49%;
  width: 100%;
  border-radius: 6px 0 0 6px;
`;
export const Layer2 = styled.div`
  border-radius: 0 6px 6px 0;
  display: block;
  width: 100%;
  height: 45%;
`;

export const LargeImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 6px 0 0 6px;
`;

export const SizeBoxContainer = styled.div`
  height: auto;
  /* display:flex;
 justify-content:space-between; */
`;

export const SizeBox = styled.div`
  height: 30px;
  width: 30px;
  line-height: 10px;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  float: left;
`;

export const Box = styled.div`
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

export const Title = styled.div`
  position: absolute;
  height: 50px;
  width: 90%;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-content: space-around;
  border: 1px solid black;
  bottom: 20px;
  background: #fff;
  color: #000;
`;

export const Header = styled.div`
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

export const Discount = styled.div`
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
