import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={`https://secure.gravatar.com/userimage/16788024/c4b5b14f23f50735cbbdfe45753bc792`}
          alt={`Rido`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Rido</strong>, a spanish developer working in Visual Studio and .NET from Redmond.
          <a href="https://twitter.com/ridomin">I rarely tweet</a>
        </p>
      </div>
    )
  }
}

export default Bio
