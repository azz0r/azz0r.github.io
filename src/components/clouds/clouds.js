import React from 'react'
import "./clouds.scss"

export default class Clouds extends React.Component {
  render() {
    return (
      <div className="clouds">
        {Array(this.props.amount).fill().map((value, key) =>
          <div
            className="cloud"
            key={key}
          />
        )}
      </div>
    )
  }
}
