import React, { useState, useEffect } from "react";
import galleryService from "../../services/gallery.service";
import "./images.css";
import {
  getImagesFailure,
  getImagesSuccess,
  resetGetImages,
  zoomImg,
} from "../../store/actions/gallery.actions";
import { useDispatch, useSelector } from "react-redux";
import { ImageDetails } from "../modal/image-details";
import { Spinner } from "react-bootstrap";
import { error } from "../../store/actions/error.actions";

export const Images = () => {
  const dispatch = useDispatch();
  const galleryReducer = useSelector((state) => state.galleryReducer);

  const images = galleryReducer.getImagesSuccess;

  useEffect(() => {
    dispatch(resetGetImages());

    //Check for url for correct servie
    const service = galleryReducer.showPrivateImages
      ? galleryService.getPrivateImages()
      : galleryService.getPublicImages();

    //get images
    service
      .then((data) => {
        // setImages(data);
        dispatch(getImagesSuccess(data));
      })
      .catch((err) => {
        dispatch(getImagesFailure(err));
        dispatch(error(err));
      });
  }, []);

  return (
    <div className="d-flex h-100">
      {!images ? (
        <div className="spinner">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="img-container">
          <ImageDetails />
          {images?.map((img) => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              key={img.id}
              src={img.url}
              className="img"
              onClick={() => dispatch(zoomImg(img.url))}
            />
          ))}
        </div>
      )}

      {images?.length === 0 ? (
        <div className="not-found">
          <h3>No images found</h3>
        </div>
      ) : null}
    </div>
  );
};
