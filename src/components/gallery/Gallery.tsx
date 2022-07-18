import { useState } from "react";
import Lightbox from "react-image-lightbox";
import { ReactPictureGrid } from "react-picture-grid";
import styles from "./Gallery.module.scss";

const images = [
  {
    image:
      "./gallery/image1.jpg",
    title: "Nature 01",
    description: "This picture is taken from unsplash.com",
  },
  {
    image:
      "./gallery/image2.jpg",
    title: "Nature 02",
    description: "This picture is taken from unsplash.com",
  },
  {
    image:
      "./gallery/image3.jpg",
    title: "Nature 03",
    description: "This picture is taken from unsplash.com",
  },
];

interface GalleryProps {
  photoIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryGrid = () => {
const [ photoIndex, setphotoIndex ] = useState(0);
const [ isOpen, setisOpen ] = useState(false);
const [ photos, setPhotos ] = useState([] as any[]);

  return (
    <section>
     {isOpen && (
       <>
          <Lightbox
            mainSrc={photos[photoIndex].image}
            nextSrc={photos[(photoIndex + 1) % photos.length].image}
            prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].image}
            onCloseRequest={() => setisOpen(false)}
            onMovePrevRequest={() => setphotoIndex((photoIndex + photos.length - 1) % photos.length)}
            onMoveNextRequest={() => setphotoIndex((photoIndex + 1) % photos.length)}
          />
        <ReactPictureGrid
        data={images}
        showImageCount
        showImageInfo
        pattern={["big", "tall", "wide", "tall", "small", "wide"]}
      />
        </>
      )}
      <ReactPictureGrid
        data={images}
        showImageCount
        showImageInfo
        pattern={["big", "tall", "big", "tall", "small", "wide"]}
        /* onClick={(index: number) => {
          setphotoIndex(index);
          setisOpen(true);
        }
        } */
        className={styles.gallery}
        imageClass={styles.image}
      />
    </section>
  );
};
