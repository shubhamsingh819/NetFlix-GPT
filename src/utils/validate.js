export const checkValidData = (name, email, password) => {
  const isNameValid = /^[A-Za-z\s]+$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^[A-Za-z]\w{7,14}$/.test(password);

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
