import React from "react"
import "../../stylesheets/base"

export default class Page extends React.Component {


  render() {
    return (
      <section className="container-fluid">
        {this.props.children}
      </section>
    )
  }
}
