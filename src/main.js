import "./stylesheets/index.scss"
import "whatwg-fetch"
import { City } from "./components/city"
import { Day } from "./components/day"
import React from "react"
import ReactDOM from "react-dom"

const settings = {
  appId: "c7074b48826a3e1f5def36267b52c7bb",
  apiUrl: "http://api.openweathermap.org/data/2.5/forecast",
}

class App extends React.Component {

  state = {
    q: "India",
    mode: "json",
    city: "",
    list: [],
    loading: true,
  }

  fetchJSON = () => {
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

  componentDidMount() {
    this.fetchJSON()
  }

  render() {
    const loadingClass = (this.state.loading) ? "loading" : "inactive"
    return (
      <main className={`weather ${loadingClass}`}>
        <If condition={this.state.city.name}>
          <City name={this.state.city.name} country={this.state.city.country} />
          <div className="days">
            {Object.keys(this.state.list).map((dateKey) =>
              <Day key={dateKey}
                date={new Date(dateKey)}
                times={this.state.list[dateKey]}
              />
            )}
          </div>
        </If>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("container"))
