import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/auth/action";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png" />
        </div>
        <div className={styles.menusContainer}>
          <div className={styles.menus}>
            <Link className={styles.button} to={"/about"}>
              About
            </Link>
          </div>
          <div className={styles.menus}>
            <button className={styles.button} onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
