import { COMPANY_ID } from '../../Types'

const initialState = {
  companyID: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_ID:
      return {
        ...state,
        companyID: action.payload
      }
    default:
      return state
  }
}
