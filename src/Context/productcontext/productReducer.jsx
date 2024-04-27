const ProductReducer = (state, action) => {
    if (action.type === "SET_LOADING") {
      return {
        ...state,
        isLoading: true,
      };
    }
    if (action.type === "API_ERROR") {
      return {
        ...state,
      };
    }
    if (action.type === "SET_API_DATA") {
      return {
        ...state,
        isLoading: false,
        productsAll: action.payload,
      };
    }
    return state;
  };
  
  export default ProductReducer;
  