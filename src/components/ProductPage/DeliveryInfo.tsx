import "../../styles/ProductPage/DeliveryInfo.css";
import { TbTruckDelivery } from "react-icons/tb";

const DeliveryInfo = () => {
  const deliveryOptions = [
    {
      name: "PostalOffice",
      price: 9.99,
    },
    {
      name: "DPD",
      price: 5.99,
    },
    {
      name: "DHL",
      price: 5.99,
    },
  ];
  return (
    <>
      <p className="delivery-title-text">Delivery Options:</p>
      <div className="delivery-options-div">
        {deliveryOptions.map((option, index) => (
          <>
            <div className="delivery-info-div" key={index}>
              <TbTruckDelivery className="delivery-icon" />
              <p className="delivery-name">{option.name}</p>
              <p className="delivery-price">{option.price}€</p>
            </div>
            {index !== deliveryOptions.length - 1 && (
              <div className="vertical-line-delivery"></div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default DeliveryInfo;
