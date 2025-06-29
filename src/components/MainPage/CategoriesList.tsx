import { categoriesListData } from "../../data/categoriesListData";
import "../../styles/MainPage/CategoriesList.css";
import List from "./List";
import { AiOutlineCaretDown } from "react-icons/ai";

const CategoriesList = () => {
  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <div className="categories-list-div">
      <div className="categories">
        {categoriesListData.map((list) => (
          <List items={list} />
        ))}
      </div>
      <p className="join-news-text" onClick={scrollToBottom}>
        Join Our Newsletter
        <AiOutlineCaretDown />
      </p>
    </div>
  );
};

export default CategoriesList;
