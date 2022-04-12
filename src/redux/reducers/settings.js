const initialState = {
  page: 1,
  prev: 0,
  menuClick: false,
};

const settings = (state = initialState, action) => {
  if (action.type === 'SET_PAGE') {
    return {
      ...state,
      page: action.payload.page,
      prev: action.payload.prev,
    };
  } else if (action.type === 'SET_MENU_CLICK') {
    return {
      ...state,
      menuClick: action.payload,
    };
  } else if (action.type === 'GO_TO') {
    return {
      ...state,
      page: action.payload.page,
      prev: action.payload.prev,
      menuClick: action.payload.menuClick,
    };
  }

  return state;
};

export default settings;
