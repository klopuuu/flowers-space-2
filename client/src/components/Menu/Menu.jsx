import styles from "./Menu.module.css";
import Logo from "../Logo/Logo";
import MenuNav from "./section/MenuNav";

function Burger() {
  const btnIcon = document.querySelector(`.${styles.header_icon}`);
  const menu = document.querySelector(`.${styles.menu}`);

  btnIcon.classList.toggle(`${styles["header_icon-active"]}`);
  menu.classList.toggle(`${styles["menu--open"]}`);
  document.body.classList.toggle("no-scroll");
}

export default function Menu() {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__row}>
          <Logo />
          <MenuNav styles={styles} />
          <div className={styles.header__icon} onClick={Burger}>
            <button className={styles.icon__btn}>
              <div className={styles.header_icon}></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
