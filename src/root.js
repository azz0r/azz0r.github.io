import React from "react"
import { Router, hashHistory } from "react-router"
import { context } from "./components/context-holder/default"
import ContextHolder from "./components/context-holder/context-holder"
import routes from "./routes"

export default class Root extends React.Component {
  render() {
    return (
      <ContextHolder context={context}>
        <Router
          key={new Date()}
          history={hashHistory}
          routes={routes()}
        />
      </ContextHolder>
    )
  }
}
