import { useEffect, useState } from "react";
import "../styles/Training.css";

// here I will fetch the posts from the server, which is getting the posts from the database

export default function Training() {
  //we need state to save the values of posts
  // we need useEffect to fetch data
  const [items, setItems] = useState([]);

  //fetching api data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://react-full-stack-app-server.onrender.com/training"
      );
      const data = await response.json();
      setItems(data.rows);
      console.log(data.rows);
    }
    fetchData();
  }, []);

  const [msgDelete, setMsgDelete] = useState(false);

  return (
    <>
      <h2>Training Runs</h2>
      <div className="posts-container">
        {items.map((item) => (
          <div className="posts-data" key={item.id} id={item.id}>
            <div className="run-date">
              <p className="date-of-run">Date of run: {item.formated_date}</p>
              <button
                onClick={
                  //function to delete post from database and update page
                  async function deleteMsg() {
                    const response = await fetch(
                      // setting dynamic urls using mapped properties
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
                    // do the delete is instant
                    if (msgDelete) {
                      return null;
                    }
                  }
                }
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
    </>
  );
}
