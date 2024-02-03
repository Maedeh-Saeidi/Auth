import Form from "./Form"
import Images from "../images/images"
import styles from "./login.module.css"
export default function Login({ password, setPassword, phoneNumber, setPhoneNumber, loggedIn, setLoggedIn }) {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Form
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          password={password}
          setPassword={setPassword}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        ></Form>
      </div>
      <div className={styles.image}>
        <img
          width={500}
          src={Images.loginImage}
          alt="Login Image"
          className={styles.image}
        />
      </div>
    </div>

  )
}