import {IS_ERROR_APP, IS_LOADING_APP} from '../../Types'

const initialState = {
  error: false,
  loading: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case IS_ERROR_APP:
      return {
        ...state.error,
        error: action.payload
      }
    case IS_LOADING_APP:
      return {
        ...state.loading,
        loading: action.payload
      }
      default:
      return initialState
  }
}