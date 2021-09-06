import React, { useState } from "react";
import FormSignUp from "./Registration";

import Categories from "./Categories";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <Categories />}
    </>
  );
};
export default Form;
