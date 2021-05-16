const initialState = {
  imgZoom: "",
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Zoom img": {
      state.imgZoom = action.payload;
      return state;
    }

    case "Zoom img reset": {
      state.imgZoom = "";

      return state;
    }

    default:
      return state;
  }
};

export default galleryReducer;
