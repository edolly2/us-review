import LoginRegisterGroup from "./LoginRegisterGroup";
import Navigation from "./Navigation";
import SiteBrand from "./SiteBrand";
const Header = () => {
  return (
    <header>
      <div className="navigation-top-cont">
        <SiteBrand />
        <LoginRegisterGroup />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
