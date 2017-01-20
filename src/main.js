import "./stylesheets/index.scss"
import { City } from "./components/city"
import { Day } from "./components/day"
import { fetchJSON } from "./fetchJSON"
import React from "react"
import ReactDOM from "react-dom"
import settings from "./settings"

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
    return fetchJSON(url)
  }

  componentDidMount() {
    this.fetchJSON().then(data => this.setState({
      ...data,
    }))
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
