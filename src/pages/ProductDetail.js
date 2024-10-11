import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <h1>상품 상세 정보</h1>
      <p>상품 ID: {productId}</p>
      <Link to="/">메인 페이지로 돌아가기</Link>
    </div>
  );
}

export default ProductDetail;
