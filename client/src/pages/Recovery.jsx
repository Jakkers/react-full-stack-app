import { useEffect, useState } from "react";
import "../styles/Training.css";

// here I will fetch the posts from the server, which is getting the posts from the database

export default function Recovery() {
  //we need state to save the values of posts
  // we need useEffect to fetch data
  const [items, setItems] = useState([]);
  const [msgDelete, setMsgDelete] = useState(false);

  //fetching api data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://react-full-stack-app-server.onrender.com/recovery"
      );
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
      <h2>Recovery Runs</h2>
      <div className="posts-container">
        {items.map((item) => (
          <div className="posts-data" key={item.id}>
            <div className="run-date">
              <p className="date-of-run">Date of run: {item.formated_date}</p>
              <button
                onClick={async function deleteMsg() {
                  const response = await fetch(
                    //?gotta use back ticks to allow input of dynamic url (I think...)
                    `https://react-full-stack-app-server.onrender.com/deleteFormData/${item.id}` ||
                      `http://localhost:8080/deleteFormData/${item.id}`,
                    {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  const data = await response.json();
                  if (data.success) {
                    setMsgDelete(!msgDelete);
                  }
                  //? Needed this if statement to make the delete instantaneous
                  if (msgDelete) {
                    return null;
                  }
                }}
                className="delete-button"
              >
                ❌
              </button>
            </div>
            <div className="running-data">
              <p>Distance: {item.distance} Miles</p>
              <p>Duration: {item.duration}</p>
              <p>Pace: {item.pace} Miles per min</p>
            </div>
            <div>
              <p className="training-notes">Notes: {item.notes}</p>
            </div>
          </div>
        ))}
      </div>
      {/* I want to see a lists of posts */}
      {/* conditional rendering idea: can have a list of titles and the user clicks on them to see the full post (will need an extra state to acheive this) */}
    </>
  );
}
