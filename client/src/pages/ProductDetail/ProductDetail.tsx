import React from "react";
import ImageGallery from "react-image-gallery";

import "./ProductDetail.scss";

const ProductDetail = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className="image__gallery">
      <ImageGallery
        items={images}
        showPlayButton={false}
        autoPlay={false}
        showFullscreenButton={false}
        showNav={false}        
      />
    </div>
  );
};

export default ProductDetail;
