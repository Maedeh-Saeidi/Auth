import { useState } from "react";
import styles from "./form.module.css"
import verifyStyles from "./verifycode.module.css";
import axios, { AxiosError } from "axios";

export default function VerifyForm({ password, phoneNumber, accessToken, setAccessToken, role, setRole, signedup, setSignedUp }) {

  const [code, setCode] = useState("");
  const[apiMessage, setApiMessage] = useState("");

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
    .then((response) => {
      console.log(response);
      setAccessToken(response.data.accessToken);
      setRole(response.data.roles[0]);
      setSignedUp(true);
      setApiMessage(response.data.message);
    })
    .catch((error) => {
      console.log(error);
      setApiMessage(AxiosError.message);
    })
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
      {apiMessage && <p>{apiMessage}</p>}
    </form>
  </div>

)
}