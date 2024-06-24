import { FC } from "react";
import Image, { ImageLoader } from "next/image";

import { PropsProduct } from "@/shared/types/types";

import styles from "./ProductInfo.module.css";

const ProductInfo: FC<PropsProduct> = ({ value, isFetching }) => {
  const imageLoader: ImageLoader = ({ src }) => {
    return `${process.env.NEXT_PUBLIC_LOCALHOST}/images/${src}`;
  };

  if (isFetching) {
    return <p className={styles.LoadingMessage}>Loading...</p>;
  }

  return (
    <>
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
    </>
  );
};

export { ProductInfo };
