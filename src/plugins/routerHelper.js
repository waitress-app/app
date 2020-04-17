const paths = window.location.pathname.split('/').filter(elem => elem !== '')
const params = new URL(window.location.href)
const tableQuerystrings = [
  'newcustomer',
  'customer',
  'checkout',
  'menu',
  'item'
]
const homeQueryStrings = [
  'tableId'
]

const makeHistory = (query) => {
  const queryValue = params.searchParams.get(query)
  if (queryValue) {
    urlPath = urlPath.includes('?') ? `${urlPath}&${query}=${queryValue}` : `${urlPath}?${query}=${queryValue}`
    window.history.pushState('', '', urlPath)
  }
}
let urlPath = window.location.origin

const hasQuerystring = window.location.href.includes('?')
const hasPath = paths.length > 1

if (hasQuerystring || hasPath) {
  window.history.pushState('', '', urlPath)
}

if (hasPath) {
  for (let path of paths) {
    urlPath = `${urlPath}/${path}`
    window.history.pushState('', '', urlPath)
  }
}

if (hasQuerystring) {
  for (let query of tableQuerystrings) {
    makeHistory(query)
  }
  for (let query of homeQueryStrings) {
    makeHistory(query)
  }
}
