import { ProductWidget } from "@/widgets/product-widget/ui";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductWidget></ProductWidget>
    </main>
  );
}
