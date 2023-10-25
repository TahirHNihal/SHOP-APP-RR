import React, { useState } from "react";
import "./ProductCard.scss";
import { BiCartAlt, BiShowAlt, BiHeart, BiSolidStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import ProductQView from "../ProductQView/ProductQView";

const ProductCard = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="product-item">
        <ProductQView show={show} onHide={() => setShow(false)} />
        <div className="product_img">
          <Link to="/banana">
            <img
              src="https://grostore-html.themetags.com/assets/img/products/apple.png"
              alt=""
            />
          </Link>
        </div>

        <div className="product-details">
          <div className="cate-name">
            <p>
              <Link to="/cart">Fresh Fruits</Link>
            </p>
          </div>
          <h3>
            <Link to="/cart">Shagor Kola (Banana Sagor)</Link>
          </h3>
          <div className="product-rating">
            <ul>
              <li>
                <BiSolidStar />
              </li>
              <li>
                <BiSolidStar />
              </li>
              <li>
                <BiSolidStar />
              </li>
              <li>
                <BiSolidStar />
              </li>
              <li>
                <BiSolidStar />
              </li>
            </ul>
          </div>
        </div>
        <div className="product-item-footer">
          <div className="price-div">
            <p>$21.00</p>
            <p>$25.00</p>
          </div>
          <div className="cart-div">
            <button>
              <BiCartAlt className="cart-icon" /> Add
            </button>
          </div>
        </div>
        <div className="view-wish-div">
          <span>
            <button>
              <BiHeart />
            </button>
          </span>
          <span>
            <button onClick={() => setShow(true)}>
              <BiShowAlt />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
