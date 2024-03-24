/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import jeremyPic from "../assets/images/image-jeremy.png";

const TrackerMenu = ({ timeFrame, setTimeFrame }) => {
  
  return (
    <section className="activity-tracker__menu">
      <div className="activity-tracker__owner">
        <img src={jeremyPic} alt="" className="activity-tracker__owner-img" />
        <div className="activity-tracker__owner-container">
          <p className="activity-tracker__owner-for">Report for</p>
          <h1 className="activity-tracker__owner-name">Jeremy Robson</h1>
        </div>
      </div>
      <div className="activity-tracker__options">
        <button
          className={
            timeFrame === "daily"
              ? "activity-tracker__option active"
              : "activity-tracker__option"
          }
          onClick={() => setTimeFrame("daily")}
        >
          Daily
        </button>
        <button
          className={
            timeFrame === "weekly"
              ? "activity-tracker__option active"
              : "activity-tracker__option"
          }
          onClick={() => setTimeFrame("weekly")}
        >
          Weekly
        </button>
        <button
          className={
            timeFrame === "monthly"
              ? "activity-tracker__option active"
              : "activity-tracker__option"
          }
          onClick={() => setTimeFrame("monthly")}
        >
          Monthly
        </button>
      </div>
    </section>
  );
};

export default TrackerMenu;
