export default (url) => {
  const reqUrl = url
  const re = new RegExp('([a-zA-Z0-9]*$)', 'i')
  return reqUrl.match(re)
}