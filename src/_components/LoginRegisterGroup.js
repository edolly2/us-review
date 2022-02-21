import { BiLogIn } from "react-icons/bi";
const LoginRegisterGroup = (props) => {
  return (
    <div className="login-register-btn-group">
      <a
        href="#"
        className="login-btn"
        role="button"
        onClick={props.loginClick}
      >
        <BiLogIn /> Login
      </a>
      <button className="btn register-btn">Register</button>
    </div>
  );
};

export default LoginRegisterGroup;
