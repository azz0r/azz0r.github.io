import "./times.scss"
import React from "react"

export const Times = ({
  times = [],
  timeSettings = {},
}) => {
  return (
    <section className="times">
      {times.map((time, key) =>
        <div key={key}
          className="time">
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
  )
}
