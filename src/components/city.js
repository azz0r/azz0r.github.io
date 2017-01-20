// react must be present
import React from "react"

export const City = ({
  name = "",
  country = "",
}) => {
  return (
    <h1>
      <span className="city__name">{name}, </span>
      <span className="city">{country}</span>
    </h1>
  )
}
