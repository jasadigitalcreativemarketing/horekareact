import {IS_ERROR_APP} from '../../Types'

const initialState = {
  error: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case IS_ERROR_APP:
      return {
        ...state.error,
        error: action.payload
      }
      default:
      return initialState
  }
}