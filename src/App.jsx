/* eslint-disable no-unused-vars */
import { useState } from "react";
import Activities from "./data.json";
import TrackerMenu from "./components/TrackerMenu";
import TrackerActivity from "./components/TrackerActivity";
import "./App.css";

function App() {
  // Three optional states: "daily", "weekly", or "monthly"
  const [timeFrame, setTimeFrame] = useState("weekly");

  return (
    <main>
      <section className="activity-tracker">
        <TrackerMenu timeFrame={timeFrame} setTimeFrame={setTimeFrame} />

        {timeFrame === "daily" &&
          Activities.map((activity, index) => (
            <TrackerActivity
              key={index}
              index={index}
              title={activity.title}
              timewindow="Yesterday"
              timeframeCurr={activity.timeframes.daily.current}
              timeframePrev={activity.timeframes.daily.previous}
            />
          ))}

        {timeFrame === "weekly" &&
          Activities.map((activity, index) => (
            <TrackerActivity
              key={index}
              index={index}
              title={activity.title}
              timewindow="Last week"
              timeframeCurr={activity.timeframes.weekly.current}
              timeframePrev={activity.timeframes.weekly.previous}
            />
          ))}

        {timeFrame === "monthly" &&
          Activities.map((activity, index) => (
            <TrackerActivity
              key={index}
              index={index}
              title={activity.title}
              timewindow="Last month"
              timeframeCurr={activity.timeframes.monthly.current}
              timeframePrev={activity.timeframes.monthly.previous}
            />
          ))}
      </section>
    </main>
  );
}

export default App;
