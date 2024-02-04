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
        ></Login>
      }
      {
        !loggedIn && !signedup && <SignUp
          signedup={signedup}
          setSignedUp={setSignedUp}
          password={password}
          setPassword={setPassword}
        ></SignUp>
      }
      {
        showVerifyCode && <VerifyCode></VerifyCode>
      }
    </>
  )
}

export default App
