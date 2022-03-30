import axios from "axios";
import React from "react";
import ProductDetail from "../ProductDetail/ProductDetail";

const Test = () => {
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

  //  const images = ['https://picsum.photos/id/1018/1000/600/', 'https://picsum.photos/id/1015/1000/600/', 'https://picsum.photos/id/1019/1000/600/']
  // const images = data?[0].images;
  // console.log(images);

  return (
    <div>
      {data ? <ProductDetail images={data[0].image} /> : ""}
      {/* <ProductDetail images={data[0]?.image} /> */}
    </div>
  );
};

export default Test;
