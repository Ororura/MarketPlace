import styles from "./page.module.css";
import { ProductWidget } from "@/widgets/product-widget";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductWidget></ProductWidget>
    </main>
  );
}
