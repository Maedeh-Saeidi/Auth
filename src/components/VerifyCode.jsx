import Images from "../images/images";
import VerifyForm from "./VerifyForm";
import styles from "./verifycode.module.css";

export default function VerifyCode() {
  return (
    <div className={styles.container}>
      <div className={styles.VerifyForm}>
        <VerifyForm
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