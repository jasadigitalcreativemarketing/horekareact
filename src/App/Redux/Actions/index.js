import { IS_ERROR_APP, IS_LOADING_APP } from "../Types";


export const isErrorApp = (status) => ({
  type: IS_ERROR_APP,
  payload: status,
})

export const isLoading = (status) => ({
  type: IS_LOADING_APP,
  payload: status,
})