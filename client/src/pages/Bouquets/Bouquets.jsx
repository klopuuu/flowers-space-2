import styles from "./Bouquets.module.css";
import Menu from "../../components/Menu/Menu";
import { React, useState, useContext, useEffect } from "react";
import { Context } from "../../index";
import Title from "../../components/Title/Title";
import PostItem from "../../components/PostItem/PostItemWithImg";
import MyButton from "../../components/UI/button/MyButton";
import MyModal from "../../components/UI/modal/MyModal";
import PostForm from "../../components/PostForm/PostForm";
import { getAllBouquet } from "../../http/bouquetAPI";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../../components/UI/loader/Loader";
import { useData } from "../../hooks/useData";
import { getPageCount } from "../../utils/pages";
import Pagination from "../../components/UI/pagination/Pagination";
import { createFlower } from "../../http/flowersApi";

export default function Bouquets() {
  const { user } = useContext(Context);
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const searchData = useData(items, search);

  const [value, setValue] = useState({
    avatar: "",
    name: "",
    price: "",
    flowers: "",
  });

  const type = ["file", "text", "number"];

  const [fetchData, isPostLoading, postError] = useFetching(async () => {
    const response = await getAllBouquet(user.id, 2, limit, page);

    setItems(response.rows);
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
          options={true}
        />
      </MyModal>
      <main className="main">
        <section className={styles.bouquets}>
          <div className="container">
            <div className={styles.bouquets__body}>
              <Title
                title="БАЗА С БУКЕТАМИ"
                placeholder="Название букета"
                search={search}
                setSearch={setSearch}
              />
              <MyButton
                onClick={() => setModal(true)}
                style={{ marginLeft: "auto" }}
              >
                Добавить букет
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
