import React, { useState, useEffect } from "react";
import galleryService from "../../services/gallery.service";
import "./images.css";
import routeService from "../../services/route.service";
import { zoomImg, resetZoomImg } from "../../store/actions/gallery.actions";
import { useDispatch, useSelector } from "react-redux";
import { ImageDetails } from "../modal/image-details";

export const Images = () => {
  let [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const galleryReducer = useSelector((state) => state.galleryReducer);

  console.log(galleryReducer.imgZoom);

  useEffect(() => {
    //Check for url for correct servie
    const service =
      routeService.getLocation() === "my-images"
        ? galleryService.getPrivateImages()
        : galleryService.getPublicImages();

    //get images
    service
      .then((data) => {
        console.log(data);
        setImages(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="img-container">
      <ImageDetails />
      {images.map((img) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          key={img.id}
          src="https://loremflickr.com/320/240"
          className="img"
          onClick={() => dispatch(zoomImg(img.url))}
        />
      ))}
    </div>
  );
};
