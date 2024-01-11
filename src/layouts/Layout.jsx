import PropTypes from "prop-types";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.array,
  };
  return (
    <>
      <header className={styles.header}>
        <h1>Library Project</h1>
        <p>List of Book With search and add to favorites</p>
      </header>
      {children}
      <footer className={styles.footer}>Developed By Amir Hossein</footer>
    </>
  );
};

export default Layout;
