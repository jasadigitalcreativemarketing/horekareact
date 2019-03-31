import { IS_ERROR_APP, IS_LOADING_APP, COMPANY_ID } from '../Types'

export const isErrorApp = (status) => ({
  type: IS_ERROR_APP,
  payload: status
})

export const isLoading = (status) => ({
  type: IS_LOADING_APP,
  payload: status
})

export const setCompanyId = (companyID) => ({
  type: COMPANY_ID,
  payload: companyID
})
