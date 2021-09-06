import useForm from "./useForm";
import validate from "./ValidateInfo";

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const onSubmit = event => {
    event.preventDefault();
  }
  const click = () => {
    localStorage.setItem("user", values.username);
  };

  return (
    <div className="Form">
      <header className="App-header">
        <h1>Majoro's Glorious Quiz</h1>
      </header>
      <form ClassName="form" onSubmit={handleSubmit}>
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
        <button type="submit" onClick={click} onSubmit={onSubmit}>
          Start Game
        </button>
      </form>
    </div>
  );
};

export default FormSignUp;
