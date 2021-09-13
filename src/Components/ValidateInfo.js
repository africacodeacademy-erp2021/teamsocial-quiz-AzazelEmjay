export default function ValidateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  } else if (values.username.length < 3) {
    errors.username = "Username should be 3 characters or more";
  } else if (values.username.length > 20) {
    errors.username = "Username should be not be more 20 characters long";
  } 
  return errors;
}
