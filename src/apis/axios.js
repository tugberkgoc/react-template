import axios from 'axios'
import Toastr from '../components/Toastr'

axios.defaults.baseURL = '/'

const handleSuccessResponse = response => {
  return response
}

const handleErrorResponse = axiosErrorObject => {
  Toastr.error(axiosErrorObject.response.data)
  return Promise.reject(axiosErrorObject)
}

export const registerIntercepts = () => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error)
  )
}
