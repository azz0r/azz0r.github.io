import React from "react"
import { Times } from "../times/times"

const defaultTimeSettings = {
  hour: "2-digit",
  minute: "2-digit",
}
const defaultDateSettings = {
  month: "short",
  day: "numeric",
  weekday: "short",
}

export const Day = ({
  times = [],
  dateSettings = defaultDateSettings,
  timeSettings = defaultTimeSettings,
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
