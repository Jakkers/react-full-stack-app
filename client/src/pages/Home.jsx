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
import "../styles/Home.css";

export default function Home() {
  const [items, setItems] = useState([]);

  //fetching api data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://react-full-stack-app-server.onrender.com/personalBest"
      );
      const data = await response.json();
      setItems(data.rows);
      console.log(data.rows);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="personal-best-container">
        <h2>Personal Best Pace</h2>
        {items.map((item) => (
          <div className="personal-best-data" key={item.id}>
            <p className="personal-best-time" key={item.id}>
              {item.pace}
            </p>
            <p>Mins per mile</p>
          </div>
        ))}
      </div>
    </>
  );
}
