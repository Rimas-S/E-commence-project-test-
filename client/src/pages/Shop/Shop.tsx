import axios from "axios";
import React from "react";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import MuiLoader from "../../components/MuiLoader/MuiLoader";

import "./Shop.scss";

const Shop = () => {
  const [data, setData] = React.useState<any>();
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/products")
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
        <ProductCard images={data.image} price={data.price} title={data.name} />
      </div>
    ));
  };

  return (
    <div className="shop">
      <h1>Shop page</h1>
      {data ? (
        <div className="container flex">{mapCard(data)}</div>
      ) : (
        <div className="shop__muiloader">
          <MuiLoader size={100} />
        </div>
      )}
    </div>
  );
};

export default Shop;
