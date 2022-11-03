import * as actionTypes from './constants'

export const multidataAction = (banners) => {
  return {
    type: actionTypes.MULTI_DATA,
    banners
  }
}

export const fetchMultidataAction = () => {
  return async (dispatch) => {
    const response = await fetch('http://123.207.32.32:8000/home/multidata')
    const data = await response.json()
    const banners = data.data.banner.list
    dispatch(multidataAction(banners))
  }
}