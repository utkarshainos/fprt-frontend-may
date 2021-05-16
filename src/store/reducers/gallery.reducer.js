const initialState = {
  imgZoom: "",
  showPrivateImages: false,
  getImages: true,
  getImagesSuccess: null,
  getImagesFailure: null,
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

    case "Show private images":
      return {
        ...state,
        showPrivateImages: action.payload,
      };

    case "Get images":
      return {
        ...state,
        getImages: true,
      };

    case "Get images success":
      return {
        ...state,
        getImagesSuccess: action.payload,
      };

    case "Get images failure":
      return {
        ...state,
        getImages: true,
        getImagesFailure: action.payload,
      };

    case "Reset Get images":
      return {
        ...state,
        getImage: true,
        getImagesSuccess: null,
        getImagesFailure: null,
      };

    default:
      return state;
  }
};

export default galleryReducer;
