import Images from "../images/images";
import VerifyForm from "./VerifyForm";
import styles from "./verifycode.module.css";

export default function VerifyCode({ password, phoneNumber, accessToken, setAccessToken, role, setRole  }) {
  return (
    <div className={styles.container}>
      <div className={styles.VerifyForm}>
        <VerifyForm
          password={password}
          phoneNumber={phoneNumber}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          role={role}
          setRole={setRole}
        ></VerifyForm>
      </div>
      <div>
        <img
          className={styles.img}
          src={Images.verifycode}
          alt="Verify code"
          width={450}
        />
      </div>
    </div>
  )
}