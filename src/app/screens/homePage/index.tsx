import React, { useEffect } from "react";
import Advertisement from "./Advertisement";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import ActiveUser from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

export default function HomePage() {
  //Selector: Store => Data

  useEffect(() => {
    //Backend server data request => Data
    //Slice: Data => Store  
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