import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./Shop.scss";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container flex">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Shop;
