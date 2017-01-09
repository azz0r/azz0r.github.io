import React, { Component } from 'react'
import './stylesheets/landing'
import Portfolio from '../../components/portfolio/portfolio'
import { StickyContainer } from 'react-sticky';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <StickyContainer>
          <Portfolio />
        </StickyContainer>
      </div>
    )
  }
}
