import type { IFooterData } from "../types/FooterDataInterFace";
import "../styles/FooterSection.css";

type Props = {
  section: IFooterData;
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
