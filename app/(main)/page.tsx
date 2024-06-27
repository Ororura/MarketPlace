import { FC } from "react";
import { ProductWidget } from "@/widgets/productWidget/ui";
import styles from "./page.module.css";

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <ProductWidget></ProductWidget>
    </main>
  );
};

export default Home;
