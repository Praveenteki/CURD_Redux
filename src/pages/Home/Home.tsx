import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "../../redux/product/action";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.product);
  const [search, setSearch] = useState("");

  const filteredProducts = products
    ? products?.filter((item: any) =>
        item?.productCategory?.productCategoryName
          ?.toLowerCase()
          ?.match(search.toLowerCase())
      )
    : [];

  useEffect(() => {
    dispatch(getProductsList());
  }, []);

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.productsContainer}>
          {filteredProducts?.map((item: any, i: number) => {
            return <ProductCard data={item?.productCategory} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
