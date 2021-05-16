import React from "react";
import { Images } from "../images/images";
import { useHistory } from "react-router-dom";
import userService from "../../services/user.service.js";

export const PrivateImages = () => {
  const history = useHistory();
  if (!userService.isLoggedIn()) {
    history.push("/login");
  }

  return <Images />;
};
