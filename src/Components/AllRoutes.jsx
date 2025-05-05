import React, { useLayoutEffect } from "react";
import { BrowserRouter,Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import { Privateroutes } from "../ContextApi/Privateroute";
import Cart from "../Pages/Cart/index";
import Shipping from "../Pages/Shipping/Shipping";
import Checkout from "../Pages/Checkout/Checkout";
import Payment from "../Pages/Payment/Payment";
import Confirm from "../Pages/Confirm/Confirm";
import OrderHistory from "../Pages/OrderHistory/OrderHistory";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Productlist from "../Pages/Admin/Productlist";
import ProductPost from "../Pages/Admin/ProductPost";
import EditProduct from "../Pages/Admin/EditProduct";
import StorePage from "./Navbar/ErrorPage";
import LensCard from  "./Navbar/LensCard";
import LenskartHome from  "./Navbar/LenskartHome";
import EyeglassesPage from "./Navbar/ToddlerCard";
import HarryPotter from "./Navbar/HarryPotter";
import SwapsAdultPage from "./Navbar/SwapAault";
import CreaterCard from "./Navbar/CreaterCard";
import CardStore from "./Navbar/CardStore";
import PurposeSection from "./Navbar/navbarDetail/NavbarDetail1";
import Nav from "./Navbar/Nav"
import StoreLocator from "./Navbar/navbarDetail/NavbarStore";
import LenskartLayout from "./Navbar/navbarDetail/LenskartLayout";
import LenskartBanner from "./Navbar/navbarDetail/LenskartBanner";
import SPXCard from "./Navbar/navbarDetail/SPXCard";
import ContactCard from "./Navbar/navbarDetail/ContactCard";
import LandlordForm from "./Navbar/navbarDetail/Landload";
import Eyewear from "./Navbar/navbarDetail/Eyewear";
import ExploreCard from "./Navbar/ExploreCard";
import Eyecare from "./Navbar/Eyecare";
import OrderCard from "./Navbar/OrderCard";
import CameraCapture from "./Navbar/CameraCard";

const AllRoutes = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/storePage" element={<StorePage/>} />
      <Route path="/image-store" element={<LensCard/>} />
      <Route path="/Lens-store" element={<LenskartHome/>} />
      <Route path="/toddlers" element={<EyeglassesPage/>} />
      <Route path="/HarryPotter" element={<HarryPotter/>} />
      <Route path="/SwapAault" element={<SwapsAdultPage/>} />
      <Route path="/Creater" element={<CreaterCard/>} />
      <Route path="/Card" element={<CardStore/>} />
    <Route path="/store-locator" element={<StoreLocator/>}/>
    <Route path="/cobrowsing" element={<LenskartLayout/>}/>
    <Route  path="/singapore" element={<AllRoutes/>}/>
    <Route  path="/engineering-blog" element={<LenskartBanner/>}/>
    <Route  path="/spx-franchise" element={<SPXCard/>}/>
    <Route  path="/contact-us" element={<ContactCard/>}/>
    <Route  path="/Landload" element={<LandlordForm/>}/>
    <Route  path="/eyewear" element={<Eyewear/>}/>
    <Route path="explore" element={<ExploreCard/>}/>
    <Route path="eyecare" element={<Eyecare/>}/>
    <Route path="orders" element={<OrderCard/>}/>
    <Route path="AR" element={<CameraCapture/>}/>

  <Route
    path="/do-more"
    element={
      <div>
        <Nav /> 
        <PurposeSection />
      </div>
    }
  />
        
      <Route
        path="/cart"
        
        element={
          <Privateroutes>
            <Cart />
          </Privateroutes>
        }
      />
      <Route
        path="/shipping"
        element={
          <Privateroutes>
            <Shipping />
          </Privateroutes>
        }
      />
      <Route
        path="/checkout"
        element={
          <Privateroutes>
            <Checkout />
          </Privateroutes>
        }
      />
      <Route
        path="/payment"
        element={
          <Privateroutes>
            <Payment />
          </Privateroutes>
        }
      />
      <Route
        path="/confirm"
        element={
          <Privateroutes>
            <Confirm />
          </Privateroutes>
        }
      />
      <Route
        path="/orderhistory"
        element={
          <Privateroutes>
            <OrderHistory />
          </Privateroutes>
        }
      />
      <Route
        path="/wishlist"
        element={
          <Privateroutes>
            <Wishlist />
          </Privateroutes>
        }
      />
      <Route
        path="/productlist"
        element={
          <Privateroutes>
            <Productlist />
          </Privateroutes>
        }
      />
      <Route
        path="/productpost"
        element={
          <Privateroutes>
            <ProductPost />
          </Privateroutes>
        }
      />
      <Route
        path="/editproduct/:id"
        element={
          <Privateroutes>
            <EditProduct />
          </Privateroutes>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
