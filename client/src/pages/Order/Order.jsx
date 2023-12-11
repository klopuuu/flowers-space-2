import styles from "./Order.module.css";
import Menu from "../../components/Menu/Menu";
import Title from "../../components/Title/Title";
import OrderPostItem from "../../components/Order/OrderPostItem";
import { React, useState } from "react";

export default function Order() {
  const [order, setOrder] = useState([
    {
      id: 1,
      dataP: "2023-11-05",
      client: "Bob Morev",
      number: "89518455689",
      dataG: "2023-11-06",
      status: "Получен",
    },
    {
      id: 1,
      dataP: "2023-11-05",
      client: "Bob Morev",
      number: "89518455689",
      dataG: "2023-11-06",
      status: "Получен",
    },
    {
      id: 1,
      dataP: "2023-11-05",
      client: "Bob Morev",
      number: "89518455689",
      dataG: "2023-11-06",
      status: "Получен",
    },
    {
      id: 1,
      dataP: "2023-11-05",
      client: "Bob Morev",
      number: "89518455689",
      dataG: "2023-11-06",
      status: "Получен",
    },
  ]);

  return (
    <>
      <Menu />
      <main className="main">
        <section className={styles.order}>
          <div className="container">
            <div className={styles.order__body}>
              <Title
                title="Заказы клиентов"
                placeholder="Поиск заказа по тел."
              />
              <OrderPostItem order={order} title='Заказы' />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
