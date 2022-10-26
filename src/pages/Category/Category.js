import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../../others/Cart/Cart";
import CartSummary from "../../others/CartSummary/CartSummary";

const Category = () => {
    const allCategory = useLoaderData();
    console.log(allCategory);

  return (
    <div>
        <h1>category {allCategory.length}</h1>
      <div className="">
        <div className="">
                  <div className="">
                      {
                          allCategory.map(category => <CartSummary key={category._id} category={category}></CartSummary>)
                      }
            {/* <h5 className="text-center fs-6 fw-semibold">{title}</h5> */}
            {/* <p className="fw-normal text-dark">
              {details.length > 200 ? (
                <>
                  {details.slice(0, 200) + "..."}
                  <Link className="ms-3" to={`/category/${_id}`}>
                    Read More
                  </Link>
                </>
              ) : (
                <>{details}</>
              )}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;


