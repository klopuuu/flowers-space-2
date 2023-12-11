import styles from "./../OrderPostItem.module.css";

// function handleChangeStatus(status) {
//   const selectElement = document.getElementById("status");
//   selectElement.value = status;
// }

export default function ItemOrder({ order, title }) {
  const listOrder = (status) => {
    return (
      <select id={styles.status} name="status" defaultValue={status}>
        <option value="Принят в работу">Принят в работу</option>
        <option value="Отменён">Отменён</option>
        <option value="Получен">Получен</option>
        <option value="Передан в доставку">Передан в доставку</option>
        <option value="Доставлен">Доставлен</option>
      </select>
    );
  };

  return (
    <div className={styles["order-list"]}>
      <div className={styles.list__item}>
        {order.map((item) => (
          <ul key={item.id}>
            <li>{item.dataP}</li>
            <li>{item.client}</li>
            <li>{item.number}</li>
            <li>{item.dataG}</li>
            <li>{title == "Заказы" ? listOrder(item.status) : item.status}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
