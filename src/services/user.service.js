const service = {};

//Auth
service.auth = (email, password, authString) =>
  new Promise((res, rej) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    fetch(
      `https://fprt-may-backend.herokuapp.com/user/${authString}`,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          switch (response.status) {
            case 403:
              throw new Error("Invalid Credentials");

            case 409:
              throw new Error("Email already exists");

            default:
              throw new Error("Somthing went wrong");
          }
        }
      })
      .then((data) => {
        //Save token to local storage
        localStorage.setItem("token", data.token);
        res(data);
      })
      .catch((error) => rej(error));
  });

service.isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return token !== null;
};

service.logout = () => {
  localStorage.clear();
};

export default service;
