import React from 'react';

const ProductDetail = (props) => {
    const {tensp, price1, xuatxu}=props;
    return (
        <div>
            <h1>Product Detail</h1>
            {/* cách 1: */}
            <p>Tên sản phẩm: {props.tensp}</p>
            {/* cách 2: */}
            <p>Giá thành: {price1}</p>
            <p>Xuất xứ: {xuatxu}</p>
        </div>
    );
}

export default ProductDetail;
