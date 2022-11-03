import * as actionTypes from './constants'

export const addNumAction = (num) => {
  return {
    type: actionTypes.ADD_NUM,
    num
  }
}

export const subNumAction = (num) => {
  return {
    type: actionTypes.SUB_NUM,
    num
  }
}