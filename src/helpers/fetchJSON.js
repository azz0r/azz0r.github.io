import "whatwg-fetch"

export function fetchJSON(url) {
  return fetch(url, {
      method: "GET"
    })
    .then(response => response.json())
    .then(results => results)
    .catch((error) => {
      console.log(error)
    })
}
