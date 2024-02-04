import styles from "./signup.module.css";
import Images from "../images/images";
import axios from "axios";
import formStyles from "./form.module.css";
import { useState } from "react";

export default function SignUp({ signedup, setSignedUp }) {

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
      .then((result) => { setSignedUp(true); })
      .catch((err) => {
        console.error("Error occurred", err);
        console.log(err.response.data.message)
      });
  }
  return (
    <div className={styles.container}>
      <div>
        <img
          width={400}
          src={Images.signupImage}
          alt="SignUp Image" />
      </div>
      <div className={styles.formContainer}>
        <h1>Sign up</h1>
        <p
          className={formStyles.logindescr}
        >Let's get you all st up so you can access your personal account.</p>
        <form
          className={formStyles.container}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label
            className={formStyles.inputLabel}
            style={{}}
          >Phone number</label>
          <input
            className={formStyles.input}
            placeholder="123-456-7890"
            type="text"
            value={phoneNumber}
            onChange={(e) => handlePhoneChange(e)}
          >
          </input>
          <button
            className={formStyles.button}
            style={{ marginTop: "1.5rem" }}
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >Send OTP</button>
        </form>
      </div>
    </div>

  )
}