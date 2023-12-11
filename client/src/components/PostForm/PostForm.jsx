import React, { useState, useContext } from "react";
import MyInput from "../UI/input/MyInput";
import style from "./PostForm.module.css";
import MyButton from "../UI/button/MyButton";
import { useAddPattern } from "../../hooks/useValidateInput";
import { useValidateInput } from "../../hooks/useValidateInput";
import { Context } from "../../index";
import { useSending } from "../../hooks/useSending";
import MySelect from "../UI/select/MySelect";

export default function PostForm({
  value,
  setValue,
  type,
  createData,
  postData,
  options,
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

  // const flowerOptions = [
  //   { value: "rose", label: "Rose" },
  //   { value: "tulip", label: "Tulip" },
  //   { value: "sunflower", label: "Sunflower" },
  //   // Add more flower options here
  // ];

  return (
    <form className={style.form} onSubmit={(e) => sendData(e)}>
      {Object.keys(value).map((item, index) =>
        type[index] !== "file" ? (
          <>
            <MyInput
              placeholder={item}
              type={type[index]}
              key={index}
              onChange={(e) => setValue({ ...value, [item]: e.target.value })}
              value={value[item]}
            />

            <div>{value[item]}</div>
          </>
        ) : (
          <MyInput
            placeholder={item}
            type={type[index]}
            key={index}
            onChange={(e) => setValue({ ...value, [item]: e.target.files[0] })}
          />
        )
      )}
      {options && (
        <MySelect
          value={select}
          onChange={(value) => setSelect(value)}
          defaultValue="Кол-во элементов на странице"
          options={[
            { value: 5, name: "5" },
            { value: 10, name: "10" },
            { value: 25, name: "25" },
            { value: -1, name: "Показать все" },
          ]}
        ></MySelect>
      )}

      <MyButton id="btn" style={{ margin: "0 auto" }} disabled>
        Загрузить
      </MyButton>
    </form>
  );
}
