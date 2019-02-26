import { IS_ERROR_APP } from "../Types";


export const isErrorApp = (status) => ({
  type: IS_ERROR_APP,
  payload: status,
})