import React from "react";
import styles from "./Pagination.module.css";
import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({ totalPages, page, setPage }) => {
  let pagesArray = usePagination(totalPages);

  return (
    <div className={styles.page__wrapper}>
      {pagesArray.map((p, index) => (
        <span
          key={index}
          className={
            page === p ? `${styles.page} ${styles.page__current}` : styles.page
          }
          onClick={() => setPage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
