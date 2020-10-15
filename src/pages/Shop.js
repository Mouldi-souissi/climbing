import ShopCard from "../components/ShopCard";
import React, { useState } from "react";
import ShopSearch from "../components/ShopSearch";

const Shop = () => {
  const [articles, setArticles] = useState({
    articles: [
      {
        name: "bag",
        price: 200,
        description: "7aja nthifa",
        pics:
          "https://ae01.alicdn.com/kf/HTB1PHEkOVXXXXXwXpXXq6xXFXXXW/2017-Canvas-Leather-Crossbody-Bag-Men-Military-Army-Vintage-Messenger-Bags-Large-Shoulder-Bag-Casual-Travel.jpg",
      },
      {
        name: "bag",
        price: 200,
        description: "7aja nthifa",
        pics:
          "https://ae01.alicdn.com/kf/HTB1PHEkOVXXXXXwXpXXq6xXFXXXW/2017-Canvas-Leather-Crossbody-Bag-Men-Military-Army-Vintage-Messenger-Bags-Large-Shoulder-Bag-Casual-Travel.jpg",
      },
      {
        name: "bag",
        price: 200,
        description: "7aja nthifa",
        pics: "",
      },
    ],
  });
  return (
    <div className="container-fluid shop" style={{ paddingTop: "100px" }}>
      <ShopSearch />
      {articles.articles.map((article) => (
        <ShopCard article={article} />
      ))}
    </div>
  );
};

export default Shop;
