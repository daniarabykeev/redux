import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/ProductsSlice";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <div>
      <button onClick={() => dispatch(getAllProducts())}>
        Get all products
      </button>
      {products
        ? products.map((product) => {
            return (
              <div key={product.id}>
                <h4>{product.title}</h4>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Products;
