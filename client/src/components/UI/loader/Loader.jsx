import React from "react";
import styles from "./Loader.module.css";
import loader from "../../../assets/svg/loader.svg";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={loader} alt="Loader" />
    </div>
  );
};

export default Loader;
