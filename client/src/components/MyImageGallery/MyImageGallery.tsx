import ImageGallery from "react-image-gallery";

import "./MyImageGallery.scss";
type Gallery = {
  original: string;
  thumbnail: string;
};

type Props = {
  images: string[];
};
//accepts images as a array of strings
const MyImageGallery = (props: Props) => {
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

export default MyImageGallery;
