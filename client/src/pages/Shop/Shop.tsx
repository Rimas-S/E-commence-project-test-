import React from "react";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import MuiLoader from "../../components/MuiLoader/MuiLoader";
import { axiosInstance } from "../../config";

import "./Shop.scss";
import { averageRating } from "../../services/services";

const Shop = () => {
  const [data, setData] = React.useState<any>();

  React.useEffect(() => {
    let isMounted = false;
    axiosInstance
      .get("/products")
      .then(function (response) {
        // handle success
        if (isMounted) return;
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    return () => {
      isMounted = true;
    };
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
    </div>
  );
};

export default Shop;
