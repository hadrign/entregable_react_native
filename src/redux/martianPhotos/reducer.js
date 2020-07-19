import * as types from './types';

const initialState = {
  loading: false,
  list: [],
  total: 0,
  page: 0,
  item: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_LIST:
      return {...state, list: action.payload.list, total: action.payload.total};

    case types.SET_LOADING:
      return {...state, loading: action.payload.loading};

    case types.UPDATE_PAGE:
      return {...state, page: action.payload.page};

    case types.SET_ITEM:
      return {...state, item: action.payload.item};

    default:
      return state;
  }
};

export default reducer;
