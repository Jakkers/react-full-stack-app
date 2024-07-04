// This is the form component

export default function Form() {
  //we need state to save the formData

  //?    formData = { Key: value
  //? Key: value }

  //we do not need useEffect here

  //a handle submit function
  //? function handleSubmit() {
  //something to prevent the default behaviour of the form
  //something that fetches the POST element

  //? fetch("url", {
  //?     method:
  //?     body:
  //?     headers: {
  //?         "content/type": "application/json"
  //?     }
  //? })
  //? }

  //a function to handle the change of the user input
  //? function handleChange() {
  //we need to add the values from te initial state
  //we need to set the properties for the new object
  //the key is the target name; the target is the target value
  //? }
  return (
    <>
      Form
      {/* you need to have a form here with two events; one to submit and one to track changes */}
      {/* remember to be consistent with how you name attributes!! 
The name attribute in your input should be the same as the database where you are storing the data */}
    </>
  );
}
