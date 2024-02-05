import styles from "../../styles/about.module.css";

export const metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1>
        Github:{" "}
        <a href="https://github.com/qusalsdn" target="_blank">
          https://github.com/qusalsdn
        </a>
      </h1>
      <h1>&copy; Byun Min Woo</h1>
    </div>
  );
}
