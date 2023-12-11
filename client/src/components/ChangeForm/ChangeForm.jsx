import React, { useState, useContext } from "react";
import MyInput from "../UI/input/MyInput";
import style from "./ChangeForm.module.css";
import MyButton from "../UI/button/MyButton";
import { Context } from "../..";
import { useAddPattern } from "../../hooks/useValidateInput";
import { useValidateInput } from "../../hooks/useValidateInput";
import { updateFlower } from "../../http/flowersApi";
import { useChangeData } from "../../hooks/useChangeData";

export default function ChangeForm({ value, setValue, type, idData, setVisible}) {
  const { user } = useContext(Context);

  const addPattern = useAddPattern(style);
  const validateInput = useValidateInput(style, value);

  const [changingData, isPostLoading, postError] = useChangeData(async () => {
    const response = await updateFlower(
      idData,
      value
    );
    console.log(response)
  });

  function changeData(e) {
    e.preventDefault();


    changingData();
    setVisible(false)
  }

  return (
    <form className={style.form} onSubmit={changeData}>
      {Object.keys(value).map((item, index) => (
        <MyInput
          placeholder={item}
          type={type[index]}
          key={index}
          onChange={(e) => setValue({ ...value, [item]: e.target.value })}
          value={value[item]}
        />
      ))}
      <MyButton id="btn" style={{ margin: "0 auto" }} disabled>
        Обновить
      </MyButton>
    </form>
  );
}
