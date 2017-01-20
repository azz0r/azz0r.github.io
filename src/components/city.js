// react must be present
import React from "react"

export const City = ({
  name,
  country,
}) => {
  return (
    <h1>
      {name}, {country}
    </h1>
  )
}
