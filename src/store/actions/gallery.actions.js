export const zoomImg = (url) => ({
  type: "Zoom img",
  payload: url,
});

export const resetZoomImg = () => ({
  type: "Zoom img reset",
});
