export const error = (error) => ({
  type: "Error",
  payload: error,
});

export const resetError = () => ({
  type: "Reset Error",
});
