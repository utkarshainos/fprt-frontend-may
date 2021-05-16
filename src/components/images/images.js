import React, { useState, useEffect } from "react";
import galleryService from "../../services/gallery.service";
import "./images.css";
import routeService from "../../services/route.service";

export const Images = () => {
  let [count] = useState(0);
  let [images, setImages] = useState([]);
  console.log();

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
      {images.map((img) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          key={img.id}
          src="https://loremflickr.com/320/240"
          className="img"
        />
      ))}
    </div>
  );
};
