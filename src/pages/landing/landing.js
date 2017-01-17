import React from 'react'
import Sky from "../../components/sky/sky"
import Clouds from "../../components/clouds/clouds"
import Drone from "../../components/drone/drone"
import Floor from "../../components/floor/floor"
import Trees from "../../components/trees/trees"
import "./stylesheets/landing"

export default class App extends React.Component {
  render() {
    const totalClouds = 6
    const totalTrees = 110
    return (
      <section className="scene">
        <Sky>
          <h1>Aaron Lote</h1>
          <Clouds amount={totalClouds} />
          <Drone followMouse={true}
            invert={false} />
          <Drone followMouse={false}
            invert={true}
          />
        </Sky>
        <Floor>
          <Trees amount={totalTrees} />
        </Floor>
      </section>
    )
  }
}
