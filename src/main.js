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
    results: [],
  }

  componentDidMount() {
    const url = `${settings.apiUrl}?appId=${settings.appId}&q=${this.state.q}&mode=${this.state.mode}`
    fetch(url, {
      method: "GET",
    })
    .then(response => response.json())
    .then((results) => {
      this.setState({
        results,
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <If condition={this.state.results.list}>
          {this.state.results.list.map((result, key) => {
            return (
              <div key={key} style={{backgroundColor: "red"}}>
                {result.dt_txt}
              </div>
            )
          })}
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
