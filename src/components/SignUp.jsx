import styles from "./signup.module.css";
import Images from "../images/images";
import axios from "axios";
import formStyles from "./form.module.css";
import { useState } from "react";

export default function SignUp({ signedup, setSignedUp, password, setPassword, phoneNumber, setPhoneNumber }) {

  function handlePhoneChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://api.sefrcar.com/api/auth/sendCode",
      data: {
        phoneNumber: phoneNumber
      }
    };
    axios(configuration)
      .then((result) => { setSignedUp(true); })
      .catch((err) => {
        console.error("Error occurred", err);
        console.log(err.response.data.message)
      });
    {response.message}
  }
  return (
    <div className={styles.container}>
      <div>
        <img
          width={400}
          src={Images.signupImage}
          style={{margin: "0 4rem"}}
          alt="SignUp Image" />
      </div>
      <div className={styles.formContainer}>
        <h1>Sign up</h1>
        <p
          className={formStyles.logindescr}
          style={{margin:"1.5rem 0"}}
        >Let's get you all st up so you can access your personal account.</p>
        <form
          className={formStyles.container}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label
            className={formStyles.inputLabel}
          >Phone number</label>
          <input
            className={formStyles.input}
            placeholder="123-456-7890"
            type="text"
            value={phoneNumber}
            onChange={(e) => handlePhoneChange(e)}
          >
          </input>
          <input
            className={formStyles.input}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
            style={{margin:"1.5rem 0"}}
          />
          <button
            className={formStyles.button}
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >Send OTP</button>
        </form>
      </div>
    </div>

  )
}