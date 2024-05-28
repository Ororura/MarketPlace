import { FC } from "react";
import { useGetProductQuery } from "@/entity/product/api/api";
import { IProduct } from "@/shared";
import styles from "./Product.module.css";
import Image from "next/image";

const Product: FC = () => {
  const { data, isFetching } = useGetProductQuery();

  if (isFetching) {
    return <p className={styles.LoadingMessage}>Loading...</p>;
  }

  return (
    <>
      {data &&
        data.map((value: IProduct, idx) => (
          <div key={idx} className={styles.ProductCard}>
            <div className={styles.ProductImage}>
              <Image
                src={`http://localhost:8080/images/${value.image.name}`}
                alt="Описание изображения"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/*<Image*/}
            {/*  src={`http://localhost:8080/images/${value.image.name}`}*/}
            {/*  alt={value.image.id.toString()}*/}
            {/*  width={80}*/}
            {/*  height={100}*/}
            {/*></Image>*/}
            <p className={styles.ProductTitle}>{value.title}</p>
            <p className={styles.ProductDescription}>{value.description}</p>
            <p className={styles.ProductCategory}>{value.category}</p>
            <p className={styles.ProductPrice}>${value.price.toFixed(2)}</p>
            <p className={styles.ProductRating}>Rating: {value.rate}</p>
          </div>
        ))}
    </>
  );
};

export default Product;
