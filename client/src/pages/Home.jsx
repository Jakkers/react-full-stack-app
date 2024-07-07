//This is the first page the user will see --> the root
//It can be the same as App

//Routing help!
//I wrapped my app in main.jsx with Browser router
//I will build my routes in the root componenet (App or Home)

//Routes should wrap your Route
//Route has teo attributes --> path for your params; and element, for the componenet you want to render in that path
//For user navigation, seperatly you will have Link componenets
//the Link componenet has an attribute calles to="" to specify the params we are navigating to

import { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);

  //fetching api data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/personalBest");
      const data = await response.json();
      setItems(data.rows);
      console.log(data.rows);
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>HOME</h1>
      <div className="personal-best-container">
        <h2>Personal best:</h2>
        {items.map((item) => (
          <div className="personal-best-data" key={item.id}>
            <p key={item.id}>{item.pace}</p>
          </div>
        ))}
      </div>
    </>
  );
}
