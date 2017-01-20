import React from "react"
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
      <section className="times">
        {times.map((time, key) =>
          <div className="time" key={key}>
            <span className="time__time">
              {time.dateTime.toLocaleTimeString([], timeSettings)}
            </span>
            <span className="time__main">
              {time.main}&nbsp;
              <Choose>
                <When condition={time.main === "Clouds"}>
                  <span className="icon fa fa-cloud"></span>
                </When>
                <When condition={time.main === "Clear"}>
                  <span className="icon clear fa fa-cloud"></span>
                </When>
                <When condition={time.main === "Rain"}>
                  <span className="icon clear fa fa-umbrella"></span>
                </When>
                <Otherwise>
                </Otherwise>
              </Choose>
            </span>
            <span className="time__description">
              {time.description}
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
