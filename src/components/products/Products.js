import React from "react";
import ProductDetail from "../product_detail/Product_detail";
import { Link } from "react-router-dom";

const Products = () => {
  const tensp = "Đồng hồ Bling Bling";
  const price = 1000000;
  const arr = [
    {
      id: 1,
      name: "Đồng hồ Bling Bling",
      origin: "Tung Của",
    },
    {
      id: 2,
      name: "Đồng hồ Chilling",
      origin: "Hà Chải",
    },
    {
      id: 3,
      name: "Đồng hồ Bong Bling",
      origin: "Anh Đào",
    },
  ];
  return (
    <div>
      {arr.map((item) => (
        <Link to={`/products/${item.id}`}>
          <ProductDetail tensp={item.name} price1={price} xuatxu={item.origin} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
