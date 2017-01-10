import React from 'react'
import './landing.scss'

export default class App extends React.Component {
  render() {
    const totalClouds = 5
    return (
      <section className="scene">
        <div className="sky">
          <div className="clouds">
            {Array(totalClouds).fill().map((value, key) =>
              <div className={`cloud c${key + 1}`} key={key} />
            )}
          </div>
        </div>
        <div className="floor"></div>
      </section>
    )
  }
}
