import "../../styles/Shared/FooterSection.css";
import type { IListData } from "../../types/ListDataInterface";

type Props = {
  section: IListData;
};

const FooterSection = ({ section }: Props) => {
  return (
    <div className="footer-section">
      <h2>{section.name}</h2>
      {section.options.map((option) => (
        <p>{option}</p>
      ))}
    </div>
  );
};

export default FooterSection;
