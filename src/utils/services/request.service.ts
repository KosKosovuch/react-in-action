import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const RequestService = () => {
  const addHeadersWithToken = (): Object => {
    return {
      headers: {
        Authorization: 'Bearer TOKEN',
      },
    }
  }

  // GET
  const $get = (url: string, config?: AxiosRequestConfig, isAuthorized?: boolean): Promise<AxiosResponse> => {
    return axios.get(url, { ...config, ...(isAuthorized ? addHeadersWithToken() : {}) })
  }

  // POST
  const $post = (
    url: string,
    data: any,
    config?: AxiosRequestConfig,
    isAuthorized?: boolean
  ): Promise<AxiosResponse> => {
    return axios.post(url, data, { ...config, ...(isAuthorized ? addHeadersWithToken() : {}) })
  }

  // PUT
  const $put = (
    url: string,
    data: any,
    config?: AxiosRequestConfig,
    isAuthorized?: boolean
  ): Promise<AxiosResponse> => {
    return axios.put(url, data, { ...config, ...(isAuthorized ? addHeadersWithToken() : {}) })
  }

  // DELETE
  const $delete = (url: string, config?: AxiosRequestConfig, isAuthorized?: boolean): Promise<AxiosResponse> => {
    return axios.delete(url, { ...config, ...(isAuthorized ? addHeadersWithToken() : {}) })
  }

  return {
    $get,
    $post,
    $put,
    $delete,
  }
}
