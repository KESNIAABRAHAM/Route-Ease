import React from "react";
import "../styles/Loginpage.css";

export default function Login() {
  return (
    <div className="container">
      <div className="">
        <h1 className="mtu">Welcome to MTU</h1>
        <form>
          <input type="text" placeholder="Enter email address" className="inputfields" /><br /> <br />
          <input type="password" placeholder="Enter password" className="inputfields"/><br />
        </form>
        <br />
        <button className="button">Login</button>
        <p className="account">Dont have an account? <a href="http://instagram.com">Signup</a></p>
      </div>
    </div>
  );
}
