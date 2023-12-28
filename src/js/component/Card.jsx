import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, image, content, price }) => {
  return (
    <div className="col-3">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href="#" className="btn btn-primary">
            Comprar {price}$
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
    price: PropTypes.number,
};

export default Card;
