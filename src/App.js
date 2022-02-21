import "./App.css";

import AboutModal from "./_components/AboutModal";
import Header from "./_components/Header";
import LoginModal from "./_components/LoginModal";
import { useState } from "react";

function App(props) {
  function call() {
    console.log("about clicked");
  }

  const [aboutModalActive, setAboutModalActive] = useState(false);
  const [loginModalActive, setLoginModalActive] = useState(false);
  return (
    <div className="App">
      <div
        className="overlay"
        style={{ display: !aboutModalActive ? "none" : "block" }}
      />
      <AboutModal
        aboutModalCloseClick={() => {
          setAboutModalActive(false);
        }}
        modalStyle={{ display: !aboutModalActive ? "none" : "flex" }}
      />
      <LoginModal
        loginModalStyle={{ display: !loginModalActive ? "none" : "flex" }}
        loginModalCancelClick={() => {
          setLoginModalActive(false);
        }}
      />
      <Header
        aboutClick={() => {
          setAboutModalActive(true);
        }}
        loginClick={() => {
          setLoginModalActive(true);
        }}
      />
      <main>
        <h1>UNITED STATES OVERSIGHT</h1>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
