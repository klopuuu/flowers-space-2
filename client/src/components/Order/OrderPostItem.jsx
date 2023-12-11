import styles from "./OrderPostItem.module.css";
import ItemOrder from "./section/ItemOrder";

export default function OrderPostItem({ order, title }) {
  const COL_NAME = [
    {
      identifier: "dateG",
      name: "Дата заказа",
    },
    {
      identifier: "client",
      name: "Клиент",
    },
    {
      identifier: "number",
      name: "Номер тел.",
    },
    {
      identifier: "dateP",
      name: "Дата получения",
    },
    {
      identifier: "status",
      name: "Статус",
    },
  ];

  return (
    <div className={styles.order__list}>
      <div className={styles["list__col-name"]}>
        <ul>
          {COL_NAME.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
      <ItemOrder order={order} title={title}/>
    </div>
  );
}
