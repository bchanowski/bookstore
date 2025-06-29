import "../../styles/Shared/SearchBar.css";
import { VscSearch } from "react-icons/vsc";

const SearchBar = () => {
  return (
    <div className="search-bar-div">
      <input className="search-bar-input" placeholder="Search for an item..." />
      <VscSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
