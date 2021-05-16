const service = {};

service.getLocation = () => {
  const url = window.location.href.split("/");

  return url[url.length - 1];
};

export default service;
