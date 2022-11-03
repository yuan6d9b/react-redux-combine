import * as actionTypes from './constants'

const reducer = (state = { banners: [] }, action) => {
  switch (action.type) {
    case actionTypes.MULTI_DATA:
      return { ...state, banners: action.banners }
    default:
      return state
  }
}

export default reducer