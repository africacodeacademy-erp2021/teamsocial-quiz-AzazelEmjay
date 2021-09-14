import React from 'react';
import validate from './ValidateInfo';
import useForm from './useForm';


const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const onsubmit = event => {
    event.preventDefault();
  }

  const click =() =>{
    localStorage.setItem("name",values.username);
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
      {errors.username && <p>{errors.username}</p>}
      <button type="submit" onClick={click} onSubmit={onsubmit}>
        Start Game
      </button>
   
      </form>
    </div>
  );
};

export default FormSignup;
