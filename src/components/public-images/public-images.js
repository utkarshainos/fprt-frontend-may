import React, { useState } from "react";
import { Images } from "../images/images";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showPrivateImages } from "../../store/actions/gallery.actions";

export const PublicImages = () => {
  const dispatch = useDispatch();

  dispatch(showPrivateImages(false));

  return (
    <div>
      <Images />
    </div>
  );
};
