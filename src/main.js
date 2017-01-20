import "./stylesheets/index.scss"
import { City } from "./components/city/city"
import { Day } from "./components/day/day"
import { fetchJSON } from "./helpers/fetchJSON"
import React from "react"
import ReactDOM from "react-dom"
import Settings from "./settings"

class App extends React.Component {

  state = {
    q: Settings.defaultLocation,
    mode: "json",
    city: "",
    days: [],
    loading: true,
  }

  fetchJSON = () => {
    const url = `${Settings.apiUrl}?appId=${Settings.appId}&q=${this.state.q}&mode=${this.state.mode}`
    return fetchJSON(url)
      .then((results) => {
        let
          loading = false,
          city = results.city,
          days = results.list.reduce((prev, current) => {
            let date = current.dt_txt.split(" ")[0]
            if (!prev[date]) prev[date] = []
            prev[date].push({
              main: current.weather[0].main,
              description: current.weather[0].description,
              dateTime: new Date(current.dt_txt),
            })
            return prev
          }, [])

        this.setState({
          loading,
          city,
          days,
        })
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
            {Object.keys(this.state.days).map((dateKey) =>
              <Day key={dateKey}
                date={new Date(dateKey)}
                times={this.state.days[dateKey]}
              />
            )}
          </div>
        </If>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("container"))
