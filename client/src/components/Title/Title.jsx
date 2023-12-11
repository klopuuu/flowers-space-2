import styles from "./Title.module.css";
import { React, useMemo, useState } from "react";
import MyInput from "../UI/input/MyInput";

export default function Title({ title, placeholder, search, setSearch }) {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      {placeholder === "" ? null : (
        <div className={styles.search}>
          <MyInput
            type="text"
            placeholder={placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
