import './App.css'
import Login from './components/Login'
import { useEffect, useState } from 'react';
import SignUp from './components/SignUp'
import VerifyCode from './components/VerifyCode';

function App() {
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [signedup, setSignedUp] = useState(false);
  const [showVerifyCode, setShowVerifyCode] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (signedup) {
      setShowVerifyCode(true);
    } else {
      setShowVerifyCode(false);
    }
  }, [signedup])
  return (
    <>
      {
        loggedIn && !signedup && <Login
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          password={password}
          setPassword={setPassword}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          role={role}
          setRole={setRole}
        ></Login>
      }
      {
        !loggedIn && !signedup && <SignUp
          signedup={signedup}
          setSignedUp={setSignedUp}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          password={password}
          setPassword={setPassword}
        ></SignUp>
      }
      {
        showVerifyCode && <VerifyCode
          password={password}
          phoneNumber={phoneNumber}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          role={role}
          setRole={setRole}
        ></VerifyCode>
      }
    </>
  )
}

export default App
