import React from "react";

function Footer() {
  return (
    <footer>
      <div className="figma-footer-bg"></div>
      <div className="figma-footer-form">
        <h2>Book A Demo</h2>
        <p>
          Get to know why Size Guarantee is the right choice for your business.
        </p>
        <iframe
          width="100%"
          height="540px"
          src="https://cdn.forms-content.sg-form.com/46e501c7-a6ad-11eb-8915-4e92c15361c4"
        ></iframe>
      </div>

      <div className="footer-main">
        <div className="container">
          <h2>
            <img
              src="https://assets.sizeguarantee.com/images/figma-footer-logo.png"
              alt=""
            ></img>
          </h2>
          <div className="col-3">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">How it Works</a>
              </li>
              <li>
                <a href="">Shopify</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Directory</a>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h3>EMAIL</h3>
            <ul>
              <li>
                <a href="">loha@sizegurantee.com</a>
              </li>
              <li>
                <a href="">Demo Store</a>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h3>SOCIAL LINKS</h3>
            <ul>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>
          Copyright ©{" "}
          <a
            href="http://www.colakin.com"
            alt=""
            target="_blank"
            rel="noreferrer"
          >
            colakin.com
          </a>{" "}
          – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
