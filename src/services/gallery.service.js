const service = {};

const token = () => localStorage.getItem("token");

/**
 * Get public images
 *
 * @returns
 */
service.getPublicImages = () =>
  new Promise((res, rej) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token()}`,
      },
    };

    fetch(
      "https://fprt-may-backend.herokuapp.com/gallery/public",
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => res(data))
      .catch((error) => rej(error));
  });

/**
 * Get private images
 *
 * @returns
 */
service.getPrivateImages = () =>
  new Promise((res, rej) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token()}`,
      },
    };

    fetch("https://fprt-may-backend.herokuapp.com/gallery/my", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => res(data))
      .catch((error) => rej(error));
  });

export default service;
