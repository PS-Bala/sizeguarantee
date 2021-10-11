import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Store from "./components/store/Store";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

function App() {
  const [searchText, setSearchText] = React.useState("");

  return (
    <div className="App">
      <Header />
      <div>
        <ol className="tab-list">
          <li className="tab-list-item">
            <NavLink to="/store" className="default-active">
              Store
            </NavLink>
          </li>
          <li className="tab-list-item">
            <NavLink to="/products">Products</NavLink>
          </li>
        </ol>
        <input
          type="text"
          placeholder="Store Name or Product Name"
          className="input-textbox"
          value={searchText}
          onChange={(args) => setSearchText(args.target.value)}
        />
      </div>
      <Switch>
        <Route path="/store">
          <Store searchText={searchText} />
        </Route>
        <Route path="/products">
          <Products searchText={searchText} />
        </Route>
        <Route path="/">
          {/* currently we redirect to store, if home page available we load that */}
          <Redirect
            to={{
              pathname: "/store",
            }}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
