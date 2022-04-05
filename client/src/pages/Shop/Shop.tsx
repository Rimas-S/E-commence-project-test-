import React from "react";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import MuiLoader from "../../components/MuiLoader/MuiLoader";
import { axiosInstance } from "../../config";
import BackToTop from "react-custom-back-to-top-button";

import "./Shop.scss";
import { averageRating } from "../../services/services";

const Shop = () => {
  const [data, setData] = React.useState<any>();

  React.useEffect(() => {
    axiosInstance
      .get("/products")
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const mapCard = (data: any) => {
    return data.map((data: any, index: number) => (
      <div key={index}>
        <ProductCard
          images={data.image}
          price={data.price}
          title={data.name}
          id={data._id}
          value={averageRating(data.ratings)}
        />
      </div>
    ));
  };

  return (
    <div className="shop">
      <div className="shop__header">
        <h1>COLLECTION</h1>
      </div>

      {data ? (
        <div className="container flex">{mapCard(data)}</div>
      ) : (
        <div className="shop__muiloader">
          <MuiLoader size={100} />
        </div>
      )}

      {/* This creates Warning: findDOMNode is deprecated in StrictMode.*/}
      <BackToTop
        style={{
          opacity: 0.7,
          backgroundColor: "var(--backgroundColorSecondary)",
        }}
      />
    </div>
  );
};

export default Shop;
