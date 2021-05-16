import React from "react";
import "./image-details.css";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const ImageDetails = () => {
  const [show, setShow] = useState(true);

  const galleryReducer = useSelector((state) => state.galleryReducer);

  // setShow(galleryReducer.imgZoom === "" ? false : true);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} size="lg" centered onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>

      {/* <Modal.Dialog>

        <Modal.Body> */}
      <img className="img-details" src="https://loremflickr.com/320/240" />
      {/* </Modal.Body>
      </Modal.Dialog> */}
    </Modal>
  );
};
