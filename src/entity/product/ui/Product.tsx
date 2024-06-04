import { FC } from "react";
import { useGetProductQuery } from "@/entity/product/api/api";
import styles from "./Product.module.css";
import Image, { ImageLoader } from "next/image";
import { IProduct } from "@/shared/types";

const Product: FC = () => {
  const { data, isFetching } = useGetProductQuery();

  const imageLoader: ImageLoader = ({ src }) => {
    return `${process.env.NEXT_PUBLIC_LOCALHOST}/images/${src}`;
  };

  if (isFetching) {
    return <p className={styles.LoadingMessage}>Loading...</p>;
  }

  return (
    <>
      {data &&
        data.map((value: IProduct, idx) => (
          <div key={idx} className={styles.ProductCard}>
            <Image
              style={{ borderRadius: "10px", objectFit: "contain" }}
              loader={imageLoader}
              src={value.imageName}
              width={200}
              height={100}
              alt={value.imageName}
            />
            <p className={styles.ProductTitle}>{value.title}</p>
            <p className={styles.ProductDescription}>{value.description}</p>
            <p className={styles.ProductCategory}>{value.category}</p>
            <p className={styles.ProductPrice}>₽{value.price.toFixed(2)}</p>
            <p className={styles.ProductRating}>Рейтинг: {value.rate}</p>
          </div>
        ))}
    </>
  );
};

export { Product };
