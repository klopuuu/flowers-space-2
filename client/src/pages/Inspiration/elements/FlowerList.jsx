import React from "react";
import styles from "./../Inspiration.module.css";
import MyInput from "../../../components/UI/input/MyInput";

function FlowerList({ flowerList, activeCheckbox, setActiveCheckbox }) {
  return (
    <div className={styles.generate__type}>
      {flowerList.map((flower, index) => (
        <div key={flower.id}>
          <MyInput
            type="checkbox"
            checked={index === activeCheckbox}
            onClick={() => setActiveCheckbox(index)}
            key={flower.id}
          />
          <label>{flower}</label>
        </div>
      ))}
    </div>
  );
}

export default FlowerList;
