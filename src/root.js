import React from "react"
import { Router, hashHistory } from "react-router"
import routes from "./routes"

export default class Root extends React.Component {
  render() {
    return (
      <Router
        key={new Date()}
        history={hashHistory}
        routes={routes()}
      />
    )
  }
}
