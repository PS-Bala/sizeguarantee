import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import logo from "./logo.svg";
import "./App.css";
import { Card, Card1, Card2, Card4 } from "./Card";
import Tabs from "./Tabs";
import Header from "./components/header";

// function App() {

const productsData1 = [
  {
    id: 1,
    productName: "tops",
    img: "https://cdn.shopify.com/s/files/1/0264/0180/0247/products/SnakeskinHat-4_220x.jpg?v=1627680377",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "M",
  },
  {
    id: 2,
    productName: "tops",
    img: "https://cdn.shopify.com/s/files/1/0066/0206/3908/products/TopsideBraidedHeadband-4_220x.jpg?v=1625587025",
    inStore: false,
    inStoreVal: "",
    price: 400,
    size: "S",
  },
  {
    id: 3,
    productName: "pant",
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 600,
    size: "L",
  },
  {
    id: 4,
    productName: "pant",
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "M",
  },
  {
    id: 5,
    productName: "pant",
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 400,
    size: "S",
  },
  {
    id: 6,
    productName: "tops",
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "M",
  },
  {
    id: 7,
    productName: "tops",
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "M",
  },
  {
    id: 8,
    productName: "tops",
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "M",
  },
  {
    id: 9,
    productName: "tops",
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 400,
    size: "S",
  },
  {
    id: 10,
    productName: "pant",
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "L",
  },
  {
    id: 11,
    productName: "pant",
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "XL",
  },
  {
    id: 12,
    productName: "pant",
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 1500,
    size: "XXL",
  },
];
let data1 = [
  {
    id: 1,
    storeName: "shoppy",
    productId: 1,
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMjEvMDcvMjEvMDYvMDgvMTQvODI4OWJhNGEtZGIwYy00ZDNiLWJmMWItZTBmN2U0NjM1ZGM2L1RIRSBJQ09OSUMgY29weS5qcGciXSxbInAiLCJzdG9yZV90aWxlIiwiMjUweDI1MCJdXQ?sha=a8701b2a54136b9a",
    inStore: false,
    inStoreVal: "",
  },
  {
    id: 2,
    storeName: "shoppy",
    productId: 1,
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMjAvMTEvMjUvMjIvMzcvNDgvZWY4MjE4YmEtZDdmOC00NmI2LWEzYTctM2JjOGRmMjQ4MGU2L1dvbWVuLmpwZyJdLFsicCIsInN0b3JlX3RpbGUiLCIyNTB4MjUwIl1d?sha=371f11fee209de0c",
    inStore: true,
    discount: true,
    discountVal: "30%",
  },
  {
    id: 3,
    storeName: "flipkar",
    productId: 1,
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMjAvMTEvMjUvMjIvMzcvNDgvZWY4MjE4YmEtZDdmOC00NmI2LWEzYTctM2JjOGRmMjQ4MGU2L1dvbWVuLmpwZyJdLFsicCIsInN0b3JlX3RpbGUiLCIyNTB4MjUwIl1d?sha=371f11fee209de0c",
    inStore: true,
    discount: true,
    discountVal: "30%",
  },
  {
    id: 4,
    storeName: "flipkar",
    productId: 2,
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMjAvMTEvMjUvMjIvMzcvNDgvZWY4MjE4YmEtZDdmOC00NmI2LWEzYTctM2JjOGRmMjQ4MGU2L1dvbWVuLmpwZyJdLFsicCIsInN0b3JlX3RpbGUiLCIyNTB4MjUwIl1d?sha=371f11fee209de0c",
    inStore: true,
    discount: true,
    discountVal: "30%",
  },
  {
    id: 5,
    storeName: "flipkart",
    productId: 2,
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMjAvMTEvMjUvMjIvMzcvNDgvZWY4MjE4YmEtZDdmOC00NmI2LWEzYTctM2JjOGRmMjQ4MGU2L1dvbWVuLmpwZyJdLFsicCIsInN0b3JlX3RpbGUiLCIyNTB4MjUwIl1d?sha=371f11fee209de0c",
    inStore: true,
    discount: true,
    discountVal: "30%",
  },
  {
    id: 6,
    storeName: "amaze",
    productId: 3,
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMjAvMTEvMjUvMjIvMzcvNDgvZWY4MjE4YmEtZDdmOC00NmI2LWEzYTctM2JjOGRmMjQ4MGU2L1dvbWVuLmpwZyJdLFsicCIsInN0b3JlX3RpbGUiLCIyNTB4MjUwIl1d?sha=371f11fee209de0c",
    inStore: true,
    discount: true,
    discountVal: "30%",
  },
  {
    id: 6,
    storeName: "amaze",
    productId: 3,
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMjAvMTEvMjUvMjIvMzcvNDgvZWY4MjE4YmEtZDdmOC00NmI2LWEzYTctM2JjOGRmMjQ4MGU2L1dvbWVuLmpwZyJdLFsicCIsInN0b3JlX3RpbGUiLCIyNTB4MjUwIl1d?sha=371f11fee209de0c",
    inStore: true,
    discount: true,
    discountVal: "30%",
  },
];
const productsData = [
  {
    img: "https://cdn.shopify.com/s/files/1/0264/0180/0247/products/SnakeskinHat-4_220x.jpg?v=1627680377",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "M",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0066/0206/3908/products/TopsideBraidedHeadband-4_220x.jpg?v=1625587025",
    inStore: false,
    inStoreVal: "",
    price: 400,
    size: "S",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 600,
    size: "L",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "M",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 400,
    size: "S",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "M",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "M",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "M",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 400,
    size: "S",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "L",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 500,
    size: "XL",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1370/7529/products/1_fffa7e91-608c-41a3-aeb1-7baf4b8b3b73.jpg?v=1627534661",
    inStore: false,
    inStoreVal: "",
    price: 1500,
    size: "XXL",
  },
];
const data = [
  {
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMjEvMDcvMjEvMDYvMDgvMTQvODI4OWJhNGEtZGIwYy00ZDNiLWJmMWItZTBmN2U0NjM1ZGM2L1RIRSBJQ09OSUMgY29weS5qcGciXSxbInAiLCJzdG9yZV90aWxlIiwiMjUweDI1MCJdXQ?sha=a8701b2a54136b9a",
    inStore: false,
    inStoreVal: "",
  },
  {
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMjAvMTEvMjUvMjIvMzcvNDgvZWY4MjE4YmEtZDdmOC00NmI2LWEzYTctM2JjOGRmMjQ4MGU2L1dvbWVuLmpwZyJdLFsicCIsInN0b3JlX3RpbGUiLCIyNTB4MjUwIl1d?sha=371f11fee209de0c",
    inStore: true,
    discount: true,
    discountVal: "30%",
  },
  {
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMTkvMDEvMzEvMjIvMjYvMjcvMWQzNWNjMWMtODEyMy00OGI2LTk0YjUtOWM0YTYzNGE1Njg1L3dvbWVucy1jbG90aGluZ1sxXS5qcGciXSxbInAiLCJzdG9yZV90aWxlIiwiMjUweDI1MCJdXQ?sha=7fc100ebd15d13e3",
    inStore: false,
  },
  {
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMTkvMDEvMzEvMjIvMjYvMjcvMWQzNWNjMWMtODEyMy00OGI2LTk0YjUtOWM0YTYzNGE1Njg1L3dvbWVucy1jbG90aGluZ1sxXS5qcGciXSxbInAiLCJzdG9yZV90aWxlIiwiMjUweDI1MCJdXQ?sha=7fc100ebd15d13e3",
    inStore: false,
  },
  {
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMTkvMDEvMzEvMjIvMjYvMjcvMWQzNWNjMWMtODEyMy00OGI2LTk0YjUtOWM0YTYzNGE1Njg1L3dvbWVucy1jbG90aGluZ1sxXS5qcGciXSxbInAiLCJzdG9yZV90aWxlIiwiMjUweDI1MCJdXQ?sha=7fc100ebd15d13e3",
    inStore: true,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMTkvMDEvMzEvMjIvMjYvMjcvMWQzNWNjMWMtODEyMy00OGI2LTk0YjUtOWM0YTYzNGE1Njg1L3dvbWVucy1jbG90aGluZ1sxXS5qcGciXSxbInAiLCJzdG9yZV90aWxlIiwiMjUweDI1MCJdXQ?sha=7fc100ebd15d13e3",
    inStore: false,
  },
  {
    img: "https://site-assets.afterpay.com/media/W1siZiIsIjIwMTkvMDEvMzEvMjIvMjYvMjcvMWQzNWNjMWMtODEyMy00OGI2LTk0YjUtOWM0YTYzNGE1Njg1L3dvbWVucy1jbG90aGluZ1sxXS5qcGciXSxbInAiLCJzdG9yZV90aWxlIiwiMjUweDI1MCJdXQ?sha=7fc100ebd15d13e3",
    inStore: false,
    inStoreVal: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    inStoreVal: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    inStoreVal: "",
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    inStoreVal: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    inStoreVal: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    inStoreVal: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    inStoreVal: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    inStoreVal: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    inStoreVal: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: false,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1287/2109/products/ADF_SwimCanada008_2048x2048.JPG?v=1560537579",
    inStore: false,
    discount: true,
    discountVal: "20%",
  },
];

class App extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    pData: data1,
    sData: productsData1,
    selectedProductIndex: 0,
    selectedStoreIndex: 0,
  };
  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 })),
      });
    }, 3000);
  };
  render() {
    // const [value, setValue] = useState('')
    return (
      <>
        {/* <div className="header"></div> */}
        <div className="App">
          <div class="header-top">
            <span>
              Looking for a Sizing Solution for an apparel retail store? Visit{" "}
              <a href="">Sizecorner.com</a>
            </span>
          </div>
          <div class="header-logo">
            <div class="logo">
              <img src="https://assets.sizeguarantee.com/images/sg-logo.png"></img>
            </div>
            <div class="menu">
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
          <Tabs>
            <div label="Store">
              <input
                type="text"
                placeholder="Store Name or Product Name"
                onChange={(e) => {
                  let value = e.target.value;
                  this.setState({
                    pData: data1
                      .filter((item) => {
                        if (!value) return true;
                        if (item.storeName.toLowerCase().includes(value)) {
                          return true;
                        }
                      })
                      .map((item) => item),
                  });
                }}
              />
              <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                {this.state.items.map((i, index) => (
                  // data && data.map((item) => <Card {...item} />)

                  <Card {...this.state.pData[index]} key={index} />
                ))}
              </InfiniteScroll>
            </div>
            <div label="Products">
              <input
                type="text"
                placeholder="Store Name or Product Name"
                onChange={(e) => {
                  // setValue(e.target.value)
                  let value = e.target.value;
                  console.log(e.target.value);

                  this.setState({
                    sData: productsData1
                      .filter((item) => {
                        if (!value) return true;
                        if (item.productName.toLowerCase().includes(value)) {
                          return true;
                        }
                      })
                      .map((item) => item),
                  });
                }}
              />
              <InfiniteScroll
                dataLength={this.state.sData.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                {this.state.items.map((i, index) => (
                  // data && data.map((item) => <Card {...item} />)

                  <Card1 {...this.state.sData[index]} key={index} />
                ))}
              </InfiniteScroll>
            </div>
            <div label="View">
              <Card2 {...this.state.sData[2]} key={2} />
              {/* <Card4 {...productsData[2]}  key={2}></Card4> */}
            </div>
          </Tabs>
          <footer>
            <div class="figma-footer-bg"></div>
            <div class="figma-footer-form">
              <h2>Book A Demo</h2>
              <p>
                Get to know why Size Guarantee is the right choice for your
                business.
              </p>
              <iframe
                width="100%"
                height="540px"
                src="https://cdn.forms-content.sg-form.com/46e501c7-a6ad-11eb-8915-4e92c15361c4"
              ></iframe>
            </div>

            <div class="footer-main">
              <div class="container">
                <h2>
                  <img src="https://assets.sizeguarantee.com/images/figma-footer-logo.png"></img>
                </h2>
                <div class="col-3">
                  <h3>USEFUL LINKS</h3>
                  <ul>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Terms of Service</a>
                    </li>
                  </ul>
                </div>

                <div class="col-3">
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

                <div class="col-3">
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

                <div class="col-3">
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
            <div class="footer-copy">
              <p>
                Copyright ©{" "}
                <a href="http://www.colakin.com" target="_blank">
                  colakin.com
                </a>{" "}
                – All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
      </>
    );
  }
  // render(<App />, document.getElementById("root"));
}
export default App;
