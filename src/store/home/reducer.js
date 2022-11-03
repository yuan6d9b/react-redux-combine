import * as actionTypes from './constants'

// const initialState = { count: 0 }
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case actionTypes.ADD_NUM:
      return { ...state, count: state.count + action.num }
    case actionTypes.SUB_NUM:
      return { ...state, count: state.count - action.num }
    default:
      return state
  }
}

export default reducer