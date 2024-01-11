import { PiMagnifyingGlassBold } from "react-icons/pi";
import PropTypes from "prop-types";
import styles from "./Search.module.css";

const Search = ({ search, setSearch, handleSearch }) => {
  Search.propTypes = {
    search: PropTypes.string,
    setSearch: PropTypes.func,
    handleSearch: PropTypes.func,
  };

  const test = async(e) => {
    await setSearch(e.target.value.toLocaleLowerCase());
    handleSearch();
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search title"
        value={search}
        onChange={test}
      />
      <button onClick={handleSearch}>
        <PiMagnifyingGlassBold />
      </button>
    </div>
  );
};

export default Search;
