import axios from "axios";
import { useState } from "react";
import styles from "./form.module.css"

export default function Form({ password, setPassword, phoneNumber, setPhoneNumber, loggedIn, setLoggedIn, accessToken, setAccessToken, role, setRole  }) {

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
      .then((result) => {
        setLogin(true);
        setAccessToken(result.data.accessToken);
        setRole(result.data.roles[0]);
      })
      .catch((error) => {
        error = new Error();
        console.log(error);
        //the next line does not work!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        console.log(error.response.data.message)
      })
  }
  const handleSignUpButton = () => {
    setLoggedIn(!loggedIn)
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
        <label
          className={styles.inputLabel}
        >Phone number</label>
        <input
          className={styles.input}
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="123-456-7890"
        />
        <br />
        <label
          className={styles.inputLabel}
        >Password</label>
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
        {/* I just comment alert !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        {/* {login ? alert("Logged in Successfully") : ""} */}
      </form>
      <p
        className={styles.accountDesc}
      >Don't have an account?<button
          className={styles.signUpButton}
          onClick={handleSignUpButton}
        >Sign up</button></p>
    </div>
  )
}