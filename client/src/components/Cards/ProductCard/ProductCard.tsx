import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MyCarousel from "../../Carousel/Carousel";
import "./ProductCard.scss";

type ProductCardProps = {
  images: string[];
  price: number;
  title: string;
  id: string;
};

const ProductCard = ({ images, price, title, id }: ProductCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <div className="flex">
        <div className="product-card__image">
          <MyCarousel images={images} />
        </div>

        <h3 className="product-card__price">
          <span>&#8364;</span>
          {price}
        </h3>

        <h3 className="product-card__title">{title}</h3>

        <div className="product-card__buttons">
          <Button color="secondary" variant="outlined" onClick={()=> {navigate(`/productdetail/${id}`)}}>
            Detail
          </Button>
          <Button color="success" variant="outlined">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
