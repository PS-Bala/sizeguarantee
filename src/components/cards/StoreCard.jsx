import React from "react";
import {
  Box,
  Discount,
  Header,
  Title,
} from "../../styledComponents/StyledComponents";

function StoreCard(props) {
  const { img, inStore, discountVal, discount, storeName, onSelect } = props;
  return (
    <Box img={img}>
      {inStore ? (
        <Header style={{ backgroundColor: "#000", color: "#fff" }}>
          In-Store
        </Header>
      ) : null}
      {discount ? (
        <Discount style={{ backgroundColor: "#fff", color: "#333" }}>
          ${discountVal}
        </Discount>
      ) : null}
      <Title>
        <p className="m-l">{storeName}</p>
        <p className="m-r">
          <img
            width="35px"
            src="https://site-assets.afterpay.com/media/W1siZiIsIjIwMTcvMDUvMjMvMTIvNTkvMjQvMDI4YTE3YTQtZWE2Zi00MGU1LWI2YWQtZGMwZTcyMDk1NWZjL0JDRi1Mb2dvX1doaXRlLnBuZyJdLFsicCIsIm5lZ2F0ZV9sb2dvIiwiMjUweDI1MCJdXQ?sha=8af6241e70877447"
            alt=""
          ></img>
        </p>
      </Title>
    </Box>
  );
}

export default StoreCard;
