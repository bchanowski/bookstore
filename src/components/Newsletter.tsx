import "../styles/Newsletter.css";
import { MdSend } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className="newsletter-div">
      <p className="newsletter-text">Sign up to our newsletter!</p>
      <input className="newsletter-input" placeholder="Your email address..." />
      <MdSend className="newsletter-icon" />
    </div>
  );
};

export default Newsletter;
