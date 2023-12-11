import {
  useEffect
} from "react";

export const useAddPattern = (style) => {
  return useEffect(() => {
    const form = document.querySelector(`.${style.form}`);
    const input = form.querySelectorAll("input");
    const textarea = form.querySelectorAll("textarea")
    const all = [...input, ...textarea]; 
    console.log(all) 

    all.forEach((item) => {
      switch (item.getAttribute("type")) {
        case "text":
          item.pattern = "^[А-Яа-яЁёs]+$";
          break;
        case "number":
          item.pattern = "[0-9]{7,9}";
          break;
        default:
          break;
      }
    });
  }, []);

}


export const useValidateInput = (style, post) => {
  return useEffect(() => {
    const form = document.querySelector(`.${style.form}`);
    const input = form.querySelectorAll("input");
    const textarea = form.querySelectorAll("textarea")
    const all = [...input, ...textarea]; 

    const btn = form.querySelector("#btn");

    const condition = all.every(item => {
      console.log(item.checkValidity(), item)
      return !(!item.checkValidity() || item.value === "")
    });

    if (!condition) {
      console.log(condition)
      btn.disabled = true;
      btn.style.pointerEvents = 'none'
    } else {
      console.log(condition)
      btn.disabled = false;
      btn.style.pointerEvents = 'auto'
    }

    
  }, [post]);

}