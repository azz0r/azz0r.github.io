import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
  render() {
    return (
      <div>
        Our new React App
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("container"))
