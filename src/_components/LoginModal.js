import React from "react";

const LoginModal = (props) => {
  return (
    <div className="login-modal" style={props.loginModalStyle}>
      <div className="login-modal--title">
        <h2>LOGIN</h2>
      </div>
      <div className="login-modal--content">
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="login-modal--btn_group">
            <button>LOGIN</button>
            <button onClick={props.loginModalCancelClick}>CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
