const initialState = {
  imgZoom: "",
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Zoom img":
      return {
        ...state,
        imgZoom: action.payload,
      };

    case "Zoom img reset":
      return {
        ...state,
        imgZoom: "",
      };

    default:
      return state;
  }
};

export default galleryReducer;
