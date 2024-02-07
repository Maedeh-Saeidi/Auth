import { useState } from "react";
import styles from "./form.module.css"
import verifyStyles from "./verifycode.module.css";
import axios from "axios";

export default function VerifyForm({ password, phoneNumber }) {

  const [code, setCode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
 
  const configurations = {
    method: "post",
    url: "https://api.sefrcar.com/api/auth/register",
    data: {
      code,
      password,
      phoneNumber
    },
  };

  axios(configurations)
    .then((result) => { console.log(result); })
    .catch((error) => { console.log(error); })
  }
return (
  <div>
    <button
      className={verifyStyles.backbtn}
    > <span style={{ fontSize: "1rem" }}>&#11104;</span> Back to login</button>
    <h1>Verify Code</h1>
    <p
      className={styles.logindescr}
      style={{ margin: " 1.5rem 0" }}
    >An authentication code has been sent to your phone number.</p>

    <form
      onSubmit={(e) => handleSubmit(e)}
      className={styles.container
      }>
      <label
        className={styles.inputLabel}
      >Enter code</label>
      <input
        className={styles.input}
        placeholder="77892"
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className={styles.button}
        style={{ marginTop: "1.5rem" }}
        type="submit"
      >Verify</button>
      <h2>informations:</h2>
      {code}
      {password}
      {phoneNumber}
    </form>
  </div>

)
}