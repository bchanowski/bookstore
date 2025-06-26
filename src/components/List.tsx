import "../styles/List.css";
import type { IListData } from "../types/ListDataInterface";

type Props = {
  items: IListData;
};

const List = ({ items }: Props) => {
  return (
    <div className="list-div">
      <h3 className="list-header">{items.name}</h3>
      {items.options.map((option) => (
        <p className="list-text">{option}</p>
      ))}
    </div>
  );
};

export default List;
