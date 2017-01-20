import React from "react"
import { Times } from "../times/times"

export const Day = ({
  times = [],
  dateSettings = {},
  timeSettings = {},
  date = new Date(),
}) => {
  const isToday = new Date().toLocaleDateString() === date.toLocaleDateString()
  const todayClass = isToday ? "active" : "inactive"
  return (
    <div className={`day ${todayClass}`}>
      <h3 className="day__title">
        {date.toLocaleDateString([], dateSettings)}
      </h3>
      <Times times={times}
        timeSettings={timeSettings}
      />
    </div>
  )
}
