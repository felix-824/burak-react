import React from "react";
import Advertisement from "./Advertisement";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import ActiveUser from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

export default function HomePage() {
  return (<div className={"homepage"}>
    <Statistics/>
     <PopularDishes/>
     <NewDishes/>
      <Advertisement/>
      <ActiveUser/>
      <Events/>
  </div>
  );
}