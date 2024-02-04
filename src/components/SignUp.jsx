import styles from "./signup.module.css"
import Images from "../images/images";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {

  const [signnedup, setSignnesUp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

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
      .then((result) => { setSignnesUp(true); })
      .catch((err) => { console.error("Error occurred", err); });
  }
  return (
    <div className={styles.container}>
      <div>
        <img
          width={400}
          src={Images.signupImage}
          alt="SignUp Image" />
      </div>
      <div>
        <h1>Sign up</h1>
        <p>Let's get you all st up so you can access your personal account.</p>
        <form
          className={styles.form}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>Phone number</label>
          <input
            placeholder="Enter phone number"
            type="text"
            value={phoneNumber}
            onChange={(e) => handlePhoneChange(e)}
          >
          </input>
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >Send OTP</button>
        </form>
      </div>
    </div>

  )
}