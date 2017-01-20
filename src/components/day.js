// react must be present
import React from "react"
const defaultTimeSettings = {
  hour: "2-digit",
  minute: "2-digit",
}

export const Day = ({
  times = [],
  timeSettings = defaultTimeSettings,
  date = new Date(),
}) => {
  const isToday = new Date().toLocaleDateString() === date.toLocaleDateString()
  const todayClass = isToday ? "active" : "inactive"
  return (
    <div className={`day ${todayClass}`}>
      <h3>{date.toLocaleDateString()}</h3>
      <ul className="times">
        {times.map((time, key) =>
          <li className="time ss-style-triangles" key={key}>
            <span className="time__time">{new Date(time.dt_txt).toLocaleTimeString([], timeSettings)}</span>
            <span className="time__main">{time.weather[0].main}</span>
            <span className="time__description">{time.weather[0].description}</span>
            <div>
              <hr className="separator" />
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
