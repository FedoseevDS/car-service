import Header from "../header/header";
import styles from "./styles.scss";

const Layout = ({ children }) => (
  <div className="layoutWrapper">
    <Header />
    <div className="layoutChildren">{children}</div>
  </div>
);

export default Layout;
