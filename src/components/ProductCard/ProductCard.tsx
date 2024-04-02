import styles from "./ProductCard.module.scss";

interface Props {
  data: any;
}

function ProductCard(props: Props) {
  const { data } = props;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={data?.productCategoryImage}
          alt={data?.productCategoryName}
        />
      </div>
      <div className={styles.dataContainer}>
        <h4 className={styles.name}>{data?.productCategoryName}</h4>
      </div>
    </div>
  );
}
export default ProductCard;
