import React, { useEffect, useState } from "react";
import styles from "./PostItemGuide.module.css";

export default function PostItemGuide({ items, value, setValue }) {
  return (
    <div className={styles.card}>
      {items.map((item) => (
        <div className={styles.card__items} key={item.id}>
          <div className={styles.items__image}>
            <img
              src={`http://localhost:8000/${item.img}`}
              className={styles.items__image}
            />
          </div>

          <div className={styles.items__info}>
            <div className={styles.items__name}>
              <p>{item.name}</p>
            </div>
            <div className={styles.items__descripe}>
              <p>{item.descripe}</p>
            </div>
            <div className={styles.items__nameuser}>
              <p>АВТОР - {item.nameuser}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
