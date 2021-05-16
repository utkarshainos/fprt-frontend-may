import React from "react";
import { Images } from "../images/images";
import { useHistory } from "react-router-dom";
import userService from "../../services/user.service.js";

import { useDispatch } from "react-redux";
import { showPrivateImages } from "../../store/actions/gallery.actions";

export const PrivateImages = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  dispatch(showPrivateImages(true));

  //Check if user is logged in
  if (!userService.isLoggedIn()) {
    history.push("/login");
  }

  return (
    <div>
      <Images />
    </div>
  );
};
