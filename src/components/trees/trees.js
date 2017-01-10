import React from 'react'
import "./trees.scss"

export default class Tree extends React.Component {
  render() {
    return (
      <div className="trees">
        {Array(this.props.amount).fill().map((value, key) =>
          <div className="tree__container" key={key}>
            <div className="tree" />
            <div className="stump" />
          </div>
        )}
      </div>
    )
  }
}
