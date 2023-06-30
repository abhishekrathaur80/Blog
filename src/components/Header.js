import React from "react";
import { LOGIN_IMAGE_URL } from "../constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <nav className="flex justify-between items-center bg-yellow-200  h-30 p-4 w-full">
      <div className="w-1/5 md:w-3/5  ">
        <Link to="/">
          <img src={LOGIN_IMAGE_URL} alt="logo" width="100" />
        </Link>
      </div>
      <div className="flex justify-end gap-11 w-4/5 md:w-2/5  text-800   text-xs md:text-sm   font-bold">
        {isLogin && (
          <>
            <p>
              <Link to="/blogs">BLOGS</Link>
            </p>
            <p>
              <Link to="/blogs">MY BLOGS</Link>
            </p>
          </>
        )}
        {!isLogin && (
          <>
            <p>
              <Link to="/login">LOGIN</Link>
            </p>
            <p>
              <Link to="/signup">REGISTER</Link>
            </p>
          </>
        )}
        {isLogin && <p>LOGOUT</p>}
      </div>
    </nav>
  );
};

export default Header;
