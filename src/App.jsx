import './App.css'
import Login from './components/Login'
import { useState } from 'react';
import SignUp from './components/SignUp'
function App() {
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <Login
        password={password}
        setPassword={setPassword}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      ></Login>
      {/* <SignUp></SignUp> */}
    </>
  )
}

export default App
