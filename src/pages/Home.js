import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import external CSS file

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-info">
        <p className="product-brand">{product.brand}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}원</p>
        <button className="add-to-cart">담기</button>
      </div>
    </Link>
  );
};

function Home() {
  const products = [
    {
      id: 1,
      brand: "브랜드A",
      name: "상품 1",
      description: "편안하고 착용감이 좋은 신발",
      price: "35,000",
      image: "rectangle-2192.png",
    },
    {
      id: 2,
      brand: "브랜드B",
      name: "상품 2",
      description: "스타일리시한 디자인의 신발",
      price: "45,000",
      image: "rectangle-2192-2.png",
    },
    {
      id: 3,
      brand: "브랜드C",
      name: "상품 3",
      description: "내구성이 뛰어난 신발",
      price: "50,000",
      image: "rectangle-2192-3.png",
    },
    {
      id: 4,
      brand: "브랜드D",
      name: "상품 4",
      description: "가벼운 운동화",
      price: "30,000",
      image: "rectangle-2192-4.png",
    },
    {
      id: 5,
      brand: "브랜드E",
      name: "상품 5",
      description: "클래식한 스타일의 신발",
      price: "40,000",
      image: "rectangle-2192-5.png",
    },
    {
      id: 6,
      brand: "브랜드F",
      name: "상품 6",
      description: "모던한 디자인의 신발",
      price: "55,000",
      image: "rectangle-2192-6.png",
    },
  ];

  return (
    <div>
      <h1>메인 페이지</h1>
      <h2>신발 상품 목록</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
