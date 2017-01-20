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
      <h3 className="day__title">
        {date.toLocaleDateString()}
      </h3>
      <section className="times">
        {times.map((time, key) =>
          <div className="time" key={key}>
            <span className="time__time">
              {new Date(time.dt_txt).toLocaleTimeString([], timeSettings)}
            </span>
            <span className="time__main">
              {time.weather[0].main}
              <If condition={time.weather[0].main === "Clouds"}>
                &nbsp;<span className="icon fa fa-cloud"></span>
              </If>
            </span>
            <span className="time__description">
              {time.weather[0].description}
            </span>
            <div>
              <hr className="separator" />
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
