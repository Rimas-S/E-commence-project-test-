import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductToBasket } from "../../../State/Redux/action";
import MyCarousel from "../../Carousel/Carousel";
import "./ProductCard.scss";

type ProductCardProps = {
  images: string[];
  price: number;
  title: string;
  id: string;
  value: number;
};

const ProductCard = ({ images, price, title, id, value }: ProductCardProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = id;

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

        <Rating name="read-only" value={value} readOnly size="small" />

        <div className="product-card__buttons">
          <Button
            color="info"
            variant="contained"
            onClick={() => {
              navigate(`/productdetail/${id}`);
            }}
          >
            Detail
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              dispatch(addProductToBasket(product));
            }}
          >
            Add Basket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
