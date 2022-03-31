import { Button } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
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
        <div className="product-detail__body grid">
          <div className="product-detail__body--image">
            <MyImageGallery images={data.image} />
          </div>

          <div className="product-detail__body--detail grid">
            <h2 className="product-detail__body--detail_title">Title</h2>
            <h2 className="product-detail__body--detail_price">Price</h2>
            <h4 className="product-detail__body--detail_color">Color</h4>
            <h4 className="product-detail__body--detail_size">Size</h4>
            <div className="product-detail__body--detail_button">
              <Button fullWidth variant="contained" color="secondary">
                Add to Card
              </Button>
            </div>
            <div className="product-detail__body--detail_payment-methods">
              <PaymentIcon />
              <p>Payment Methods</p>
            </div>
            <div className="product-detail__body--detail_description">
              Description
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
