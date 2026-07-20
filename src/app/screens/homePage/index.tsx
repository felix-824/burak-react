import React, { useEffect } from "react";
import Advertisement from "./Advertisement";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import ActiveUser from "./ActiveUsers";
import Events from "./Events";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { Productcollection } from "../../../lib/enums/product.enum";
import "../../../css/home.css";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
});


export default function HomePage() {
  const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch());


  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        
      })
      .then((data) => {
        setPopularDishes(data);
      })
      .catch((err) => console.log(err));
      
       product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        productCollection: Productcollection.DISH,
      })
      .then((data) => {
        setNewDishes(data);
      })
      .catch((err) => console.log(err));
       
  }, []);
  
  return (
  <div className={"homepage"}>
    <Statistics/>
     <PopularDishes/>
     <NewDishes/>
      <Advertisement/>
      <ActiveUser/>
      <Events/>
  </div>
  );
}