export const RequestService = () => {
  const $get = (url: string, options: any, isAuthorized: boolean) => {}
  const $post = (url: string, options: any, isAuthorized: boolean) => {}
  const $put = (url: string, options: any, isAuthorized: boolean) => {}
  const $delete = (url: string, options: any, isAuthorized: boolean) => {}

  return {
    $get,
    $post,
    $put,
    $delete,
  }
}
