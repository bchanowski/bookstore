import "../../styles/ProductPage/ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="details-div">
      <p className="details-title">Product Details:</p>
      <p className="detail-p">
        <span className="detail-category">Publisher: </span>
        <span className="detail-info">LocalPublisher</span>
      </p>
      <p className="detail-p">
        <span className="detail-category">Pages: </span>
        <span className="detail-info">456</span>
      </p>
      <p className="detail-p">
        <span className="detail-category">Published: </span>
        <span className="detail-info">17-06-2025</span>
      </p>
      <p className="detail-p">
        <span className="detail-category">Language: </span>
        <span className="detail-info">English</span>
      </p>
    </div>
  );
};

export default ProductDetails;
