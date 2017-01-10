import React from "react"

export default class Page extends React.Component {


  render() {
    return (
      <section className="container-fluid">
        {this.props.children}
      </section>
    )
  }
}
