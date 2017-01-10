import React from 'react'
import "./floor.scss"

export default class App extends React.Component {
  render() {
    return (
        <div className="floor">
          {this.props.children}
        </div>
    )
  }
}
