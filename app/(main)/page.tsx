import styles from "./page.module.css";
import { ProductWidget } from "@/widgets/product-widget/ui";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductWidget></ProductWidget>
    </main>
  );
}
