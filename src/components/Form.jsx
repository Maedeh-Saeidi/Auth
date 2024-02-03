import axios from "axios";
import { useState } from "react";
import { Axios } from "axios";
import styles from "./form.module.css"

export default function Form({ password, setPassword, phoneNumber, setPhoneNumber }) {

  const [login, setLogin] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://api.sefrcar.com/api/auth/login",
      data: {
        phoneNumber,
        password,
      }
    }
    axios(configuration)
      .then((result) => { setLogin(true); })
      .catch((error) => { error = new Error(); })
  }
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div
        className={styles.logindescr}
      >Login to access your travelwise account</div>
      <form
        className={styles.container + ' ' + styles.form}
        onSubmit={(e) => handleSubmit(e)}>
        <lable
        className={styles.inputLable}
        >Email</lable>
        <input
          className={styles.input}
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="123-456-7890"
        />
        <br />
        <lable
          className={styles.inputLable}
        >Password</lable>
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="**********"
        />
        <br></br>
        <button
          className={styles.forgetButton}
        >Forget password</button>
        <br />
        <button
          className={styles.button}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login</button>
        {login ? alert("Logged in Successfully") : ""}
      </form>
      <p
        className={styles.accountDesc}
      >Don't have an account?<span style={{ color: "#FF8682 ", cursor: "pointer"}}>Sign up</span></p>
    </div>
  )
}