import { Button } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import React from "react";
import { useParams } from "react-router-dom";
import MyImageGallery from "../../components/MyImageGallery/MyImageGallery";
import { axiosInstance } from "../../config";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const [data, setData] = React.useState<any>();
  const { id } = useParams();
  console.log(data);

  React.useEffect(() => {
    axiosInstance
      .get(`/products/${id}`)
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        setData({ error: error.message });
        console.log(error);
      });
  }, [id]);
  return (
    <main className="product-detail">
      {data?._id ? (
        <div className="product-detail__body container grid">
          <div className="product-detail__body--image">
            <MyImageGallery images={data.image} />
          </div>

          <div className="product-detail__body--detail grid">
            <h2 className="product-detail__body--detail_title">{data.name}</h2>
            <h2 className="product-detail__body--detail_price">
              <span>&#8364;</span>
              {data.price}
            </h2>
            <h4 className="product-detail__body--detail_color">
              Color: {data.color}
            </h4>
            <h4 className="product-detail__body--detail_size">
              Size: {data.size}
            </h4>
            <div className="product-detail__body--detail_button">
              <Button fullWidth variant="contained" color="secondary">
                Add to Card
              </Button>
            </div>
            <div className="product-detail__body--detail_payment-methods flex">
              <div className="flex">
                <CreditCardIcon />
                <p>Payment Methods</p>
              </div>
              <img
                style={{ width: "200px" }}
                src="/img/payment.png"
                alt="payment"
              />
            </div>
            <div className="product-detail__body--detail_description">
              <h3>Product Description</h3>
              <br />
              {data.describtion}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.error ? <div style={{ color: "red" }}>{data.error}</div> : ""}
    </main>
  );
};

export default ProductDetail;
