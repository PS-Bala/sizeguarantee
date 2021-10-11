import React from "react";
import { storeData1 } from "../../staticData";
import StoreCard from "./../cards/StoreCard";
// import InfiniteScroll from "react-infinite-scroll-component";
import { StoreContainer } from "./Store.style";

function Store({ searchText }) {
  const [storeList, setStoreList] = React.useState([]);
  let filteredStoreList = [...storeList];
  filteredStoreList = filteredStoreList.filter((item) =>
    item.storeName.includes(searchText)
  );

  React.useEffect(() => {
    // here we call API
    let APIResponse = storeData1;
    setStoreList(APIResponse);
  }, []);

  return (
    <StoreContainer>
      {/* <InfiniteScroll
        dataLength={this.state.items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      > */}
      {filteredStoreList.map((store) => (
        <StoreCard key={store.id} {...store} />
      ))}
      {/* </InfiniteScroll> */}
    </StoreContainer>
  );
}

export default React.memo(Store);
