import React from "react";
import ImageGallery from "react-image-gallery";

import "./ProductDetail.scss";
type Gallery = {
  original: string;
  thumbnail: string;
};

type Props = {
  images: string[];
};

const ProductDetail = (props: Props) => {
  //   const [gallery, setGallery] = React.useState<Gallery[]>([]);
  console.log(props.images);

  const galleryImages = () => {
    const galleryImages: Gallery[] = [];
    props.images?.forEach((image) => {
      const galleryItem = {
        original: image,
        thumbnail: image,
      };
      galleryImages.push(galleryItem);
    });
    return galleryImages;
  };
  const gallery = galleryImages();
//   console.log(a);
  //   setGallery(a)

  //   setGallery(galleryImages);

  return (
    <div className="image__gallery">
      <ImageGallery
        items={gallery}
        showPlayButton={false}
        autoPlay={false}
        showFullscreenButton={false}
        showNav={false}
      />
    </div>
  );
};

export default ProductDetail;
