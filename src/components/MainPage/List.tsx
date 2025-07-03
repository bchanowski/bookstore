import "../../styles/MainPage/List.css";
import type { IListData } from "../../types/ListDataInterface";

type Props = {
  items: IListData;
};

const List = ({ items }: Props) => {
  return (
    <div className="list-div">
      <h3 className="list-header">{items.name}</h3>
      {items.options.map((option, index) => (
        <p className="list-text" key={index}>
          {option}
        </p>
      ))}
    </div>
  );
};

export default List;
