import CurrentDate from "./CurrentDate";
import LoginRegisterGroup from "./LoginRegisterGroup";
import Navigation from "./Navigation";
import SiteBrand from "./SiteBrand";
const Header = (props) => {
  return (
    <header>
      <div className="navigation-top-cont">
        <SiteBrand />
        <div className="header-div-cont">
          <CurrentDate />
          <Navigation aboutClick={props.aboutClick} />
        </div>
        <LoginRegisterGroup loginClick={props.loginClick} />
      </div>
    </header>
  );
};

export default Header;
