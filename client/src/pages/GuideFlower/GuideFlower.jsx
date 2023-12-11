import styles from "./GuideFlower.module.css";
import Menu from "../../components/Menu/Menu";
import { React, useState, useContext, useEffect } from "react";
import { Context } from "../../index";
import Title from "../../components/Title/Title";
import { getAllGuid } from "../../http/guideApi";
import { createGuide } from "../../http/guideApi";
import { useFetching } from "../../hooks/useFetching";
import { useData } from "../../hooks/useData";
import { getPageCount } from "../../utils/pages";
import MyButton from "../../components/UI/button/MyButton";
import MyModal from "../../components/UI/modal/MyModal";
import PostFormGuide from "./section/PostFormGuide/PostFormGuide";
import PostItemGuide from "./section/PostItemGuide/PostItemGuide";
import Loader from "../../components/UI/loader/Loader";

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
    descripe: "",
  });


  const [fetchData, isPostLoading, postError] = useFetching(async () => {
    const response = await getAllGuid();
    console.log(response);

    setItems(response);
    // console.log(items)
    // const totalCount = response.count;
    // setTotalPages(getPageCount(totalCount, limit));
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
        <PostFormGuide
          value={value}
          setValue={setValue}
          createData={createData}
          postData={createGuide}
        />
      </MyModal>
      <main className="main">
        <section className={styles.guide}>
          <div className="container">
            <div className={styles.guide__body}>
              <Title
                title="Статьи"
                placeholder="Название статьи"
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
                <PostItemGuide
                  items={items}
                  value={value}
                  setValue={setValue}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
