import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";
import "../styles/StarSystem.css";

type Props = {
  rating: string;
};

const StarSystem = ({ rating }: Props) => {
  return (
    <div className="stars-div">
      {Number(rating) > 0 ? (
        <IoIosStar className="rating" />
      ) : (
        <IoIosStarOutline className="rating" />
      )}
      {Number(rating) >= 1.5 ? (
        Number(rating) >= 2 ? (
          <IoIosStar />
        ) : (
          <IoIosStarHalf />
        )
      ) : (
        <IoIosStarOutline />
      )}
      {Number(rating) >= 2.5 ? (
        Number(rating) >= 3 ? (
          <IoIosStar />
        ) : (
          <IoIosStarHalf />
        )
      ) : (
        <IoIosStarOutline />
      )}
      {Number(rating) >= 3.5 ? (
        Number(rating) >= 4 ? (
          <IoIosStar />
        ) : (
          <IoIosStarHalf />
        )
      ) : (
        <IoIosStarOutline />
      )}
      {Number(rating) >= 4.5 ? (
        Number(rating) >= 5 ? (
          <IoIosStar />
        ) : (
          <IoIosStarHalf />
        )
      ) : (
        <IoIosStarOutline />
      )}
      <p className="rating">{rating}</p>
    </div>
  );
};

export default StarSystem;
