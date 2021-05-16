import React from "react";
import "./image-details.css";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetZoomImg } from "../../store/actions/gallery.actions";

export const ImageDetails = () => {
  const dispatch = useDispatch();
  const galleryReducer = useSelector((state) => state.galleryReducer);
  let show = galleryReducer.imgZoom === "" ? false : true;
  const handleClose = () => dispatch(resetZoomImg());

  return (
    <Modal show={show} size="lg" centered onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <img className="img-details" src="https://loremflickr.com/320/240" />
    </Modal>
  );
};
