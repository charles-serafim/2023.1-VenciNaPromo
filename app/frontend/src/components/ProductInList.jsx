import React, { useState } from 'react';
import ProductDetail from '../components/ProductDetail';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProductInList.css';
import '../styles/ProductDetail.css';
import '../styles/ShoppingList.css';
import { productList } from '../services/products';

const ProductInList = (product) => {
    const [showPopup, setShowPopup] = useState(false);
    // const user_data = props.props.userData;

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    console.log(product);

    return (
      <div className="product-in-list" onClick={togglePopup}>
        {/* {(user_data.user_flag == 1) ? (
            <button
                className="remove-product-button"
                onClick={() => console.log("Remover produto")}
            >
            </button>

        ) : ()} */}
        <button
          className="remove-product-button"
          onClick={() => console.log("Remover produto")}
        ></button>

        <div className="product-in-list__image">
          <img src={product.product.product_image} alt="Imagem do Produto 1" />
        </div>
        <div className="product-in-list__info">
          <div className="product-in-list__info__name">
            <h3>{product.product.product_name}</h3>
          </div>
          <div className="product-in-list__info__price">
            <h3>{product.product.product_price}</h3>
          </div>
          <button className="product-in-list-button" onClick={togglePopup}>
            <span className="plus-icon"></span>
          </button>
        </div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <div className="product-detail-container">
                <div className="product-detail">
                  <img
                    src={product.product.product_image}
                    alt="Imagem do Produto 1"
                  />
                  <div className="product-detail-title">
                    {product.product.product_name}
                  </div>
                  <div className="product-detail-text-box">
                    <div className="product-detail-store">
                      Empório Jardim Botânico
                    </div>
                    <div className="product-detail-description">
                      {product.product.product_description}
                    </div>
                    <div className="product-detail-quantity">
                      Quantidade disponível: {product.product.product_quantity}
                    </div>
                  </div>
                  <div className="product-detail-price">
                    R$ {product.product.product_price}
                  </div>
                  {/* <div className="product-detail-button">Adicionar</div> */}
                </div>
              </div>
              <button
                className="product-in-list-button"
                onClick={togglePopup}
              ></button>
            </div>
          </div>
        )}
      </div>
    );
};

export default ProductInList;