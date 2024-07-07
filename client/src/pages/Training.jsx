import { useEffect, useState } from "react";

// here I will fetch the posts from the server, which is getting the posts from the database

export default function Training() {
  //we need state to save the values of posts
  // we need useEffect to fetch data
  const [items, setItems] = useState([]);

  //fetching api data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/training");
      const data = await response.json();
      setItems(data.rows);
      console.log(data.rows);
    }
    fetchData();
  }, []);
  //we need a function to get the posts
  //this fucntion is async and uses fetch
  //once you fetch the data, you will set the state variable to be the posts data
  //DECISION: you can have a seperate function to get the posts, and call the function in the useEffect hook or you can write the function directly inside useEffect
  return (
    <>
      <div className="posts-container">
        {items.map((item) => (
          <div className="posts-data" key={item.id}>
            <p>{item.formated_date}</p>
            <p>{item.distance}</p>
            <p>{item.duration}</p>
            <p>{item.pace}</p>
            <p>{item.notes}</p>
          </div>
        ))}
      </div>
      Posts
      {/* I want to see a lists of posts */}
      {/* conditional rendering idea: can have a list of titles and the user clicks on them to see the full post (will need an extra state to acheive this) */}
    </>
  );
}
