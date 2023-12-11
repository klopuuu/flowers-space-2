import styles from "./History.module.css";
import Menu from "../../components/Menu/Menu";
import Title from "../../components/Title/Title";
import OrderPostItem from "../../components/Order/OrderPostItem";
import { React, useState } from "react";

export default function History() {
  const [order, setOrder] = useState([
    {
      id: 1,
      dataP: "2023-11-05",
      client: "Bob Morev",
      number: "89518455689",
      dataG: "2023-11-06",
      status: "Отправлено",
    },
    {
      id: 1,
      dataP: "2023-11-05",
      client: "Bob Morev",
      number: "89518455689",
      dataG: "2023-11-06",
      status: "Отправлено",
    },
    {
      id: 1,
      dataP: "2023-11-05",
      client: "Bob Morev",
      number: "89518455689",
      dataG: "2023-11-06",
      status: "Отправлено",
    },
    {
      id: 1,
      dataP: "2023-11-05",
      client: "Bob Morev",
      number: "89518455689",
      dataG: "2023-11-06",
      status: "Отправлено",
    },
  ]);

  return (
    <>
      <Menu />
      <main className="main">
        <section className={styles["history-order"]}>
          <div className="container">
            <div className={styles["history-order__body"]}>
              <Title
                title="История заказов"
                placeholder="Поиск заказа по тел."
              />
              <OrderPostItem order={order} title='История'/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
