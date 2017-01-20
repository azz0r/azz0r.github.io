import "whatwg-fetch"

export function fetchJSON(url) {
  return fetch(url, {method: "GET"})
    .then(response => response.json())
    .then((results) => {
      results.list = results.list.reduce((prev, current) => {
        let date = current.dt_txt.split(" ")[0]
        if (!prev[date]) prev[date] = []
        prev[date].push(current)
        return prev
      }, [])

      return {
        city: results.city,
        list: results.list,
        loading: false,
      }
    }).catch((error) => {
      console.log(error)
    })
}
