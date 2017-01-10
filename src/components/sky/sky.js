import React from 'react'
import "./sky.scss"

export default class Sky extends React.Component {
  render() {
    return (
      <div className="sky">
        {this.props.children}
      </div>
    )
  }
}
