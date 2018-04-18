import * as actionTypes from 'actionTypes'

export const setHeaderHeight = data => {
  return {
    type: actionTypes.SET_HEADER_HEIGHT,
    data: data,
  }
}
