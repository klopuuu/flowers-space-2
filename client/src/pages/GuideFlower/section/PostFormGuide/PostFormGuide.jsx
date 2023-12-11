import React, { useState, useContext } from "react";
import MyInput from "../../../../components/UI/input/MyInput";
import style from "./PostFormGuide.module.css";
import MyButton from "../../../../components/UI/button/MyButton";
import { useAddPattern } from "../../../../hooks/useValidateInput";
import { useValidateInput } from "../../../../hooks/useValidateInput";
import { Context } from "../../../..";
import { useSending } from "../../../../hooks/useSending";

export default function PostFormGuide({
  value,
  setValue,
  createData,
  postData,
}) {
  const addPattern = useAddPattern(style);
  const validateInput = useValidateInput(style, value);
  const { user } = useContext(Context);
  const [select, setSelect] = useState("");

  const [sendingData, isPostLoading, postError] = useSending(async () => {
    const data = new FormData();
    Object.keys(value).map((item) => {
      data.append(`${item}`, value[item]);
    });

    const response = await postData(data, user.id);
    createData(response);
  });

  function sendData(e) {
    e.preventDefault();

    sendingData();
  }

  return (
    <form className={style.form} onSubmit={(e) => sendData(e)}>
      <MyInput
        placeholder="Картинка дял статьи"
        type="file"
        onChange={(e) => setValue({ ...value, avatar: e.target.files[0] })}
      />

      <textarea
        type="text"
        onChange={(e) => setValue({ ...value, name: e.target.value })}
        value={value.name}
        placeholder="Название статьи"
      />

      <textarea
        type="text"
        onChange={(e) => setValue({ ...value, descripe: e.target.value })}
        value={value.descripe}
        maxLength="1200"
        cols={400}
        rows={100}
        placeholder="Содержимое вашей статьи"
      />

      <MyButton id="btn" style={{ margin: "0" }} disabled>
        Загрузить
      </MyButton>
    </form>
  );
}
