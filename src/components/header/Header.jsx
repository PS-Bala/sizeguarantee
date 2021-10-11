import React from "react";

function Header() {
  return (
    <>
      <div className="header-top">
        <span>
          Looking for a Sizing Solution for an apparel retail store? Visit{" "}
          <a href="/">Sizecorner.com</a>
        </span>
      </div>
      <div className="header-logo">
        <div className="logo">
          <img
            src="https://assets.sizeguarantee.com/images/sg-logo.png"
            alt=""
          ></img>
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>How it works</li>
            <li>Shopify</li>
            <li>Directory</li>
            <li>Shopper</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default React.memo(Header);
