import React from "react";
import "../styles/Signup.css";
import { useState } from "react";
import validation from "./Validation";

export default function Signup() {
  const [values, setValues] = useState({
    email: "",
    //phone_number: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({})

  const handleInput = (e) => {
    setValues({...values, [e.target.name]: [e.target.value]});
  };
  function handleValidation(e) {
    e.preventDefault()
    setErrors(validation(values));
  }

  return (

    <div className="container">
      <div>
        <form action="" onSubmit={handleValidation}>
          <h1>Welcome to MTU </h1>
          <h2>Signup to navigate</h2>

          <input
            type="email"
            placeholder="Email address"
            name="email"
            onChange={handleInput}
            className="inputfields" />
            {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
         
          <br />
          <br />

          <input
            type="text"
            placeholder="Enter phone number"
            name="phone_number"
            onChange={handleInput}
            className="inputfields"/>
            {errors.phone_number && <p style={{color:'red'}}>{errors.phone_number}</p>}
        
          <br />
          <br />

          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInput}
            className="inputfields" />
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
          
          <br />
          <br />

          <input
            type="password"
            placeholder="confirm password"
            name="confirm_password"
            onChange={handleInput}
            className="inputfields" 
            />
            {errors.confirm_password && <p style={{color:'red'}}>{errors.confirm_password}</p>}
          
          <br />
          <br />

          <button className="button">SIGN UP <a href="https://gemini.google.com/app/cbb30d7bab6523d8"></a></button>
        </form>
      </div>
    </div>
  );  
}
