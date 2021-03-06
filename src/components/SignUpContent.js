import React, { useState, useEffect } from "react";
import { registerUser } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
const SignUpContent = ({ history }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    if (auth.isAuth) {
      history.push("/profile");
    }
  }, [auth.isAuth]);
  const [info, setInfo] = useState({
    pseudo: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const signUpNow = (e) => {
    e.preventDefault();
    dispatch(registerUser(info));
  };
  return (
    <div>
      <form onSubmit={signUpNow}>
        <label>pseudo</label>
        <input onChange={handleChange} type="text" name="pseudo" />
        <label>email</label>
        <input onChange={handleChange} type="text" name="email" />
        <label>password</label>
        <input onChange={handleChange} type="text" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpContent;
