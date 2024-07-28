import MapViewer from "./components/MapViewer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MapViewer />
    </main>
  );
}
