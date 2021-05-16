export const zoomImg = (url) => ({
  type: "Zoom img",
  payload: url,
});

export const resetZoomImg = () => ({
  type: "Zoom img reset",
});

export const showPrivateImages = (show) => ({
  type: "Show private images",
  payload: show,
});

export const getImages = (showPrivate) => ({
  type: "Get images",
  payload: showPrivate,
});

export const getImagesSuccess = (data) => ({
  type: "Get images success",
  payload: data,
});

export const getImagesFailure = (error) => ({
  type: "Get images failure",
  payload: error,
});

export const resetGetImages = () => ({
  type: "Reset Get images",
});
