// deviceReducer.js
const initialState = {
    types: [],
    brands: [],
    devices: [],
    selectedType: {},
    selectedBrand: {},
    page: 1,
    totalCount: 0,
    limit: 3,
  };
  
  const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TYPES':
        return { ...state, types: action.payload };
      case 'SET_BRANDS':
        return { ...state, brands: action.payload };
      case 'SET_DEVICES':
        return { ...state, devices: action.payload };
      case 'SET_SELECTED_TYPE':
        return { ...state, selectedType: action.payload, page: 1 };
      case 'SET_SELECTED_BRAND':
        return { ...state, selectedBrand: action.payload, page: 1 };
      case 'SET_PAGE':
        return { ...state, page: action.payload };
      case 'SET_TOTAL_COUNT':
        return { ...state, totalCount: action.payload };
      default:
        return state;
    }
  };
  
  export default deviceReducer;
  