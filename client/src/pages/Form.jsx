// This is the form component
import "../styles/Form.css";
import { useState } from "react";

export default function Form() {
  //we need state to save the formData

  const [formValues, setFormValues] = useState({
    username: "",
    date: "",
    duration: "",
    distance: "",
    pace: "",
    notes: "",
    category: "",
  });

  //we do not need useEffect here

  //a handle submit function
  //this function controls the onSubmit event
  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://react-full-stack-app-server.onrender.com", {
      method: "POST",
      headers: {
        "content/type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
  }

  //something to prevent the default behaviour of the form
  //something that fetches the POST element

  //a function to handle the change of the user input
  //? function handleChange() {
  //we need to add the values from te initial state
  //we need to set the properties for the new object
  //the key is the target name; the target is the target value
  //? }
  return (
    <div className="form-container">
      Form
      <form onSubmit={handleSubmit} className="form-style">
        <label
          name="username"
          htmlFor="username"
          className="username"
          id="username"
        >
          Name
        </label>
        <input name="username" type="text" id="username" />
        <label name="username" htmlFor="date" id="date">
          Date
        </label>
        <input name="date" type="date" id="date" />
        <label name="date" htmlFor="duration" id="duration">
          Duration (HH:MM:SS)
        </label>
        <input
          name="duration"
          id="duration"
          placeholder="HH:MM:SS"
          type="text"
          // using regex to specify required characters
          pattern="^[0-9]{2}:[0-9]{2}:[0-9]{2}"
        />
        <label name="duration" htmlFor="distance" id="distance">
          Distance (mi)
        </label>
        <input
          name="distance"
          type="number"
          id="distance"
          placeholder="Miles"
          step=".01"
        />
        <label name="pace" htmlFor="pace" id="pace" required>
          Pace (MM:SS)
        </label>
        <input
          name="pace"
          type="text"
          id="pace"
          placeholder="MM:SS"
          // using regex to specify required characters
          pattern="^[0-9]{2}:[0-9]{2}"
        />
        <label name="notes" htmlFor="notes" id="notes">
          Notes
        </label>
        <textarea name="notes" id="notes" rows={5}></textarea>
        <select name="category" id="category">
          <option value="training">Training</option>
          <option value="recovery">Recovery</option>
        </select>
        <button name="submit" type="submit" id="submit">
          Submit
        </button>
      </form>
      {/* you need to have a form here with two events; one to submit and one to track changes */}
      {/* remember to be consistent with how you name attributes!! 
The name attribute in your input should be the same as the database where you are storing the data */}
    </div>
  );
}
