const service = {};

//Login
service.login = (email, password) =>
  new Promise((res, rej) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    fetch("https://fprt-may-backend.herokuapp.com/user/login", requestOptions)
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
