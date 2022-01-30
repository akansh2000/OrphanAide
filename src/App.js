import logo from "./logo.svg";
import "./App.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import {
  loginUser,
  readUserData,
  registerWithEmailAndPassword,
  sendPasswordReset,
  writeUserData,
} from "./Firebase";

function App() {
  useEffect(
    () => registerWithEmailAndPassword("as369@snu.edu.in", "kuru!@#12"),
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
