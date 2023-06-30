import React, { useState } from "react";
import { LOGIN_IMAGE_URL } from "../constants";
import { Link } from "react-router-dom";

const loginInitialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [loginInputValues, setLoginInputValues] = useState(loginInitialValues);

  const loginInputHandler = (e) => {
    setLoginInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="mx-auto border w-3/4 md:w-[400px]  flex flex-col justify-center items-center  shadow-md mt-8 gap-8 p-4"
      onSubmit={submitHandler}
    >
      <img src={LOGIN_IMAGE_URL} alt="login" className="w-24  p-2" />
      <input
        type="text"
        className="border border-gray-800 w-full h-8 rounded-md"
        placeholder=" Username  "
        name="username"
        value={loginInputValues.username}
        onChange={(e) => loginInputHandler(e)}
        required
      />
      <input
        type="password"
        className="border border-gray-800 h-8  w-full rounded-md"
        placeholder=" Password"
        name="password"
        value={loginInputValues.password}
        onChange={(e) => loginInputHandler(e)}
        required
      />
      <div className="flex flex-col gap-2 items-center  w-full">
        <button className="border bg-blue-800  font-bold  text-white h-8 w-full rounded-md">
          Login
        </button>

        <button href="#" className="text-red-800">
          <Link to="/signup">Don't have an account?</Link>
        </button>
      </div>
    </form>
  );
};

export default Login;
