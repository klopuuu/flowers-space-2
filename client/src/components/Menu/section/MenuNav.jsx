import { Link, useNavigate } from "react-router-dom";
import {
  LOGIN_ROUTE,
  CLIENTENV_ROUTE,
  CLIENT_BASE,
  BASE_FLOWERS,
  BOUQUETS,
  GUIDEFLOWER,
  ORDERS,
  HISTORY,
  INSPIRATION,
} from "../../../utils/consts";
import { Context } from "../../../index";
import { useContext, useEffect } from "react";

export default function MenuNav({ styles }) {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const logout = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.clear();
    navigate(LOGIN_ROUTE);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menu__items}>
        <div className={styles.menu__profile}>
          <Link to={CLIENTENV_ROUTE}>
            <p className={styles.menu__home}>МОЙ ПРОФИЛЬ</p>
          </Link>
        </div>

        <div className={styles.menu__nav}>
          <ul className={styles.nav__list}>
            <Link to={ORDERS}>
              <li>
                <span className={styles["nav__list-item"]}>&#127807;</span>
                ЗАКАЗЫ
              </li>
            </Link>
            <Link to={CLIENT_BASE}>
              <li>
                <span className={styles["nav__list-item"]}>&#127807;</span>
                БАЗА КЛИЕНТОВ
              </li>
            </Link>
            <Link to={HISTORY}>
              <li>
                <span className={styles["nav__list-item"]}>&#127807;</span>
                ИСТОРИЯ ЗАКАЗОВ
              </li>
            </Link>
            <Link to={BOUQUETS}>
              <li>
                <span className={styles["nav__list-item"]}>&#127807;</span>
                БАЗА БУКЕТОВ
              </li>
            </Link>
            <Link to={BASE_FLOWERS}>
              <li>
                <span className={styles["nav__list-item"]}>&#127807;</span>
                БАЗА ЦВЕТОВ
              </li>
            </Link>
            <Link to={GUIDEFLOWER}>
              <li>
                <span className={styles["nav__list-item"]}>&#127807;</span>
                СПРАВОЧНИК ЦВЕТОВ
              </li>
            </Link>
            <Link to={INSPIRATION}>
              <li>
                <span className={styles["nav__list-item"]}>&#127807;</span>
                ВДОХНОВЕНИЕ
              </li>
            </Link>
          </ul>
        </div>

        <div className={styles.menu__exit}>
          <div onClick={logout} className={styles.menu__btn}>
            ВЫЙТИ
          </div>
        </div>
      </div>
    </div>
  );
}
