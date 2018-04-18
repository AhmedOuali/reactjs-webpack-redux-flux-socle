import * as actionTypes from 'actionTypes'
const initialState = {
  height: 0,
}

const reducer = (state = initialState, action) => {
  if (action.type == actionTypes.SET_HEADER_HEIGHT) {
    return {
      height: action.data,
    }
  }
  return state
}

export default reducer
