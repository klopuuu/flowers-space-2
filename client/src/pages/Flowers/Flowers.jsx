import styles from "./Flowers.module.css";
import Menu from "../../components/Menu/Menu";
import { React, useState, useContext, useMemo, useEffect } from "react";
import { Context } from "../../index";
import Title from "../../components/Title/Title";
import PostItem from "../../components/PostItem/PostItemWithImg";
import MyButton from "../../components/UI/button/MyButton";
import MyModal from "../../components/UI/modal/MyModal";
import PostForm from "../../components/PostForm/PostForm";
import { getAllFlowers } from "../../http/flowersApi";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../../components/UI/loader/Loader";
import { useData } from "../../hooks/useData";
import { getPageCount } from "../../utils/pages";
import Pagination from "../../components/UI/pagination/Pagination";
import { createFlower } from "../../http/flowersApi";

export default function Flowers() {
  const { user } = useContext(Context);
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const searchData = useData(items, search);

  const [value, setValue] = useState({
    avatar: "",
    name: "",
    quantity: "",
    price: "",
  });

  const type = ["file", "text", "number", "number"];

  const [fetchData, isPostLoading, postError] = useFetching(async () => {
    const response = await getAllFlowers(user.id, limit, page);
    setItems((response.rows));
    const totalCount = response.count;
    setTotalPages(getPageCount(totalCount, limit));
  });

  const createData = (newData) => {
    setItems([...items, newData]);
    setModal(false);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <Menu />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm
          value={value}
          setValue={setValue}
          type={type}
          createData={createData}
          postData={createFlower}
        />
      </MyModal>
      <main className="main">
        <section className={styles.flower}>
          <div className="container">
            <div className={styles.flower__body}>
              <Title
                title="БАЗА С ЦВЕТАМИ"
                placeholder="Название цветка: Роза"
                search={search}
                setSearch={setSearch}
              />
              <MyButton
                onClick={() => setModal(true)}
                style={{ marginLeft: "auto" }}
              >
                Добавить цветок
              </MyButton>
              {isPostLoading ? (
                <Loader />
              ) : (
                <PostItem
                  items={searchData}
                  tp={type}
                  value={value}
                  setValue={setValue}
                />
              )}
              <Pagination
                totalPages={totalPages}
                page={page}
                setPage={setPage}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
