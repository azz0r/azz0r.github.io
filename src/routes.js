import React from "react"
import { IndexRoute, Route } from "react-router"

export default () => {
  return (
    <Route
      path="/">
      <IndexRoute
        getComponent={(nextState, callback) => {
          require.ensure([], (require) => {
            callback(null, require("./pages/landing/landing").default)
          })
        }}
        />
      <Route
        path="*"
        getComponent={(nextState, callback) => {
          require.ensure([], (require) => {
            callback(null, require("./pages/landing/landing").default)
          })
        }}
      />
    </Route>
  )
}
