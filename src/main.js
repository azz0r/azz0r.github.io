import React from "react"
import ReactDOM from "react-dom"
import "whatwg-fetch"
const settings = {
  appId: "c7074b48826a3e1f5def36267b52c7bb",
  apiUrl: "http://api.openweathermap.org/data/2.5/forecast"
}

class App extends React.Component {

  state = {
    q: "London, UK",
    mode: "json",
    city: "",
    list: "",
    loading: true,
  }

  componentDidMount() {
    const url = `${settings.apiUrl}?appId=${settings.appId}&q=${this.state.q}&mode=${this.state.mode}`
    fetch(url, {
      method: "GET",
    })
    .then(response => response.json())
    .then((results) => {
      results.list = results.list.reduce((prev, current) => {
        let date = current.dt_txt.split(" ")[0]
        if (!prev[date]) prev[date] = []
        prev[date].push(current)
        return prev
      }, [])
      this.setState({
        city: results.city,
        list: results.list,
        loading: false,
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    const City = ({ name, country }) => {
      return (
        <h1>
          {name}, {country}
        </h1>
      )
    }
    return (
      <div className={`weather ${(this.state.loading) ? "loading" : "inactive"}`}>
        <If condition={this.state.city.name}>
          <City name={this.state.city.name} country={this.state.city.country} />
          {this.state.list.map((result, key) => {
            console.log("hi")
            return (
              <div>
                <h2>{key}</h2>
                <p>{result.length}</p>
              </div>
            )})}
        </If>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("container"))

/*
{this.state.results.map((result, key) => {
  return (
    <div key={key}>{key}</div>
  )
})}
*/
