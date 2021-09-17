import React from "react";
import validate from "./ValidateInfo";
import useForm from "./useForm";

const FormSignup = ({ submitForm }: {submitForm:any}) => {
  const { handleChange, values, handleSubmit } = useForm(
    submitForm,
    validate
  );

  
  const onsubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  const click = () => {
    localStorage.setItem("name", values.username);
  };

  return (
    <div className="Form">
      <header className="App-header">
        <h1>Majoro's Glorious Quiz</h1>
      </header>
      <form className="form" onSubmit={handleSubmit}>
        Enter Player Name <br />
        <label htmlFor="username">UserName: </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="enter user name"
          value={values.username}
          onChange={handleChange}
        />
         <p>Username should be between 3 and 20 characters long</p>
        <button type="submit" onClick={click} onSubmit={onsubmit}>
          Start Game
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
