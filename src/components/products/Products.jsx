import React from "react";
import ProductCard from "../cards/ProductCard";
import { productsData1 } from "./../../staticData";
import DisplayProductDetails from "./../displayProductDetails/DisplayProductDetails";
import { ProductContainer } from "./Products.style";
// import InfiniteScroll from "react-infinite-scroll-component";

function Products({ searchText }) {
  const [productList, setProductList] = React.useState([]);
  const [showProductDetails, setShowProductDetails] = React.useState(null);

  let filteredProductList = [...productList];
  filteredProductList = filteredProductList.filter((item) =>
    item.productName.includes(searchText)
  );

  React.useEffect(() => {
    // here we call API
    let APIResponse = productsData1;
    setProductList(APIResponse);
  }, []);

  const productCardClickHandler = (product) => {
    setShowProductDetails(product);
  };

  return (
    <>
      <ProductContainer hide={showProductDetails ? true : false}>
        {/* <InfiniteScroll
        dataLength={this.state.items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      > */}
        {filteredProductList.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onSelect={productCardClickHandler}
          ></ProductCard>
        ))}
        {/* </InfiniteScroll> */}
      </ProductContainer>
      {showProductDetails !== null && (
        <DisplayProductDetails
          {...showProductDetails}
          onBack={() => setShowProductDetails(null)}
        />
      )}
    </>
  );
}

export default React.memo(Products);
