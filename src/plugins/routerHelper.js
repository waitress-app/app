const paths = window.location.pathname.split('/').filter(elem => elem !== '')
let urlPath = window.location.origin

const mapPath = () => {
  const hasPath = paths.length > 1
  if (hasPath) {
    for (let path of paths) {
      urlPath = `${urlPath}/${path}`
      window.history.pushState('', '', urlPath)
    }
  }
}

const mapQueryString = () => {
  const hasQuerystring = window.location.href.includes('?')
  if (hasQuerystring) {
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

    for (let query of tableQuerystrings) {
      makeHistory(query)
    }
    for (let query of homeQueryStrings) {
      makeHistory(query)
    }
  }
}

if (paths[0] !== 'login') {
  mapPath()
  mapQueryString()
}
