import React, { useState, useEffect } from "react";

export const PublicImages = () => {
  let [count] = useState(0);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("https://fprt-may-backend.herokuapp.com/")
      .then((response) => response)
      .then((data) => {
        count = 1;
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return <h1> {count}</h1>;
};
