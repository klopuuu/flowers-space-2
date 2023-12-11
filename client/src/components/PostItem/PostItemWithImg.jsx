import React, { useEffect, useState } from "react";
import styles from "./PostItemWithImg.module.css";
import MyButton from "../UI/button/MyButton";
import ChangeForm from "../ChangeForm/ChangeForm";
import MyModal from "../UI/modal/MyModal";

export default function PostItem({ items, tp, value, setValue }) {
  const [modal, setModal] = useState(false);

  const [id, setId] = useState(-1);
  const type = tp.filter((item) => item != "file");
  const handleMouseEnter = (e) => {
    const hover = e.target.querySelector(`.${styles.hover}`);

    hover.style.display = "block";
  };

  const handleMouseDown = (e) => {
    const hover = e.target.querySelector(`.${styles.hover}`);

    hover.style.display = "none";
  };

  const fetchDataFlower = (idData) => {
    setId(idData);
    if (idData !== -1) {
      setModal(true);
      const data = items.filter((item) => item.id === idData);

      setValue({
        name: data[0].name,
        quantity: data[0].quantity,
        price: data[0].price,
      });
    }
  };

  useEffect(() => {
    fetchDataFlower(id);
    setId(-1);
  }, []);

  return (
    <>
      <MyModal visible={modal} setVisible={setModal}>
        <ChangeForm
          value={value}
          setValue={setValue}
          type={type}
          idData={id}
          setVisible={setModal}
        />
      </MyModal>
      <div className={styles.card}>
        {items.map((item) => (
          <div
            className={styles.card__items}
            key={item.id}
            onMouseOver={(e) => handleMouseEnter(e)}
            onMouseLeave={(e) => handleMouseDown(e)}
          >
            <img
              src={`http://localhost:8000/${item.img}`}
              className={styles.items__image}
              style={{ pointerEvents: "none" }}
            />
            <div
              className={styles.items__name}
              style={{ pointerEvents: "none" }}
            >
              <p>{item.name}</p>
            </div>
            <div
              className={styles.items__price}
              style={{ pointerEvents: "none" }}
            >
              {item.quantity === undefined ? null : (
                <p>{item.quantity} шт. /</p>
              )}
              <p>{item.price} р.</p>
            </div>
            <div className={styles.hover} style={{ pointerEvents: "none" }}>
              <MyButton
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  pointerEvents: "auto",
                }}
                onClick={() => fetchDataFlower(item.id)}
              >
                Изменить
              </MyButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
