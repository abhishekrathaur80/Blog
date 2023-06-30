import React, { useState } from "react";
import { LOGIN_IMAGE_URL } from "../constants";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const signupInitialValues = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [signupInput, setSignupInput] = useState(signupInitialValues);
  const navigate = useNavigate();

  const signupInputHandler = (e) => {
    setSignupInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/register", {
        username: signupInput.username,
        email: signupInput.email,
        password: signupInput.password,
      });
      if (data.success) {
        alert("user registered successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="mx-auto border  w-3/4 md:w-[400px]   flex flex-col justify-center items-center  shadow-md mt-14 shadow-grey gap-3 p-12"
      onSubmit={submitHandler}
    >
      <img src={LOGIN_IMAGE_URL} alt="login" className="w-24  p-2" />
      <input
        type="text"
        name="username"
        className="border border-gray-800 w-full h-8 rounded-md"
        placeholder=" Username"
        value={signupInput.username}
        onChange={(e) => signupInputHandler(e)}
        required
      />
      <input
        type="email"
        className="border border-gray-800 h-8  w-full  rounded-md"
        placeholder=" Email"
        name="email"
        value={signupInput.email}
        onChange={(e) => signupInputHandler(e)}
        required
      />
      <input
        type="password"
        className="border border-gray-800 h-8  w-full rounded-md"
        placeholder=" Password"
        name="password"
        value={signupInput.password}
        onChange={(e) => signupInputHandler(e)}
        required
      />

      <div className="flex flex-col gap-2 items-center  w-full">
        <button className="border bg-blue-800  font-bold  text-white h-8  w-full">
          Create An Account
        </button>

        <button href="#" className="text-red-800">
          <Link to="/login">Already have an account? </Link>
        </button>
      </div>
    </form>
  );
};

export default Signup;
