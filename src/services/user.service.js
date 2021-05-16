const service = {};

//Auth
service.auth = (email, password) =>
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
      .then((data) => {
        //Save token to local storage
        localStorage.setItem("token", data.token);
        res(data);
      })
      .catch((error) => rej(error));
  });

service.isLoggedIn = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return token !== null;
};

service.logout = () => {
  localStorage.clear();
};

export default service;
