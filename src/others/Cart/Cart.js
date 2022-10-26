import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ content }) => {
  const {
    _id,
    author,
    details,
    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
  } = content;
  //   console.log(title);
  return (
    <>
      <div className="">
        <div className="flex">
          <div className="width shadow-lg p-3 mb-5 bg-body rounded">
            <img
              className="w-100"
              style={{ height: "250px" }}
              src={image_url}
              alt=""
            />
            <h5 className="text-center fs-6 fw-semibold pt-3">{title}</h5>
            <p className="fw-normal text-dark pt-3">
              {details.length > 200 ? (
                <>
                  {details.slice(0, 200) + "..."}
                  <Link className="ms-3" to={`/details/${_id}`}>
                    Read More
                  </Link>
                </>
              ) : (
                <>{details}</>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
