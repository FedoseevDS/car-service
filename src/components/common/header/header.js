import logo from "../../../assests/img/logo3.png";

import "./styles.scss";

const Header = () => (
  <div className="headerWrapper">
    <div className="headerLogo">
      <img src={logo} />
    </div>
    <div className="headerSideBar">
      <div>сайт бар</div>
      <div>виды работ</div>
      <div>виды работ</div>
      <div>контакты</div>
    </div>
  </div>
);
export default Header;
