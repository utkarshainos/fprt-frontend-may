import React, { useState } from "react";
import { Images } from "../images/images";
import { Spinner } from "react-bootstrap";

export const PublicImages = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Images />
      <Spinner animation="border" variant="primary" hidden={!isLoading} />
    </div>
  );
};
