import styles from "./page.module.css";
import { ProductWidget } from "@/widgets/product-widget/ui";
import { Notifications } from "@/entity/notification/ui";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductWidget></ProductWidget>
      <Notifications></Notifications>
    </main>
  );
}
