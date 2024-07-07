// This is the form component
import "../styles/Form.css";
import { useState } from "react";

export default function Form() {
  //we need state to save the formData

  const [formValues, setFormValues] = useState({
    date: "",
    duration: "",
    distance: 0.0,
    pace: "",
    notes: "",
    category: "",
  });

  //we do not need useEffect here

  //a handle submit function
  //this function controls the onSubmit event
  function handleSubmit(e) {
    e.preventDefault();
    console.log("the form values are:", formValues);

    fetch("https://react-full-stack-app-server.onrender.com/runningPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    //method to reset the form after submission
    setFormValues({
      date: "",
      duration: "",
      distance: 0.0,
      pace: "",
      notes: "",
      category: "",
    });
  }

  //something to prevent the default behaviour of the form
  //something that fetches the POST element

  //a function to handle the change of the user input
  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  //we need to add the values from te initial state
  //we need to set the properties for the new object
  //the key is the target name; the target is the target value
  return (
    <div className="form-container">
      <h2>Add Run Workout</h2>
      <form onSubmit={handleSubmit} className="form-style">
        <label htmlFor="date">Date</label>
        <input
          value={formValues.date}
          onChange={handleInputChange}
          name="date"
          type="date"
          id="date"
          pattern="\d{4}-\d{2}-\d{2}"
        />
        <label htmlFor="duration">Duration (HH:MM:SS)</label>
        <input
          value={formValues.duration}
          onChange={handleInputChange}
          name="duration"
          id="duration"
          placeholder="HH:MM:SS"
          type="text"
          // using regex to specify required characters
          pattern="^[0-9]{2}:[0-9]{2}:[0-9]{2}"
        />
        <label htmlFor="distance">Distance (mi)</label>
        <input
          value={formValues.distance}
          onChange={handleInputChange}
          name="distance"
          type="number"
          id="distance"
          placeholder="Miles"
          step=".01"
        />
        <label htmlFor="pace">Pace (MM:SS)</label>
        <input
          value={formValues.pace}
          onChange={handleInputChange}
          name="pace"
          type="text"
          id="pace"
          placeholder="MM:SS"
          // using regex to specify required characters
          pattern="^[0-9]{2}:[0-9]{2}"
        />
        <label htmlFor="notes">Notes</label>
        <textarea
          value={formValues.notes}
          onChange={handleInputChange}
          name="notes"
          id="notes"
          rows={5}
        ></textarea>
        <label htmlFor="category">Choose a workout type</label>
        <select
          onChange={handleInputChange}
          name="category"
          id="category"
          required
        >
          <option value="">Select from the list</option>
          <option value="24">Training</option>
          <option value="25">Recovery</option>
        </select>
        <button className="submit-button" type="submit" id="submit">
          Submit
        </button>
      </form>
      {/* you need to have a form here with two events; one to submit and one to track changes */}
      {/* remember to be consistent with how you name attributes!! 
The name attribute in your input should be the same as the database where you are storing the data */}
    </div>
  );
}

console.log(Form);
