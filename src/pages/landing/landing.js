import React from 'react'
import './stylesheets/landing.scss'

export default class App extends React.Component {
  render() {
    const totalClouds = 6
    const totalTrees = 110
    return (
      <section className="scene">
        <div className="sky">
          <div className="clouds">
            {Array(totalClouds).fill().map((value, key) =>
              <div className="cloud"
                key={key} />
            )}
          </div>
        </div>
        <div className="floor">
          {Array(totalTrees).fill().map((value, key) =>
            <div className="tree"
              key={key} />
          )}
        </div>
      </section>
    )
  }
}
