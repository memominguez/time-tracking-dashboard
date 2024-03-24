/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import iconWork from "../assets/images/icon-work.svg";
import iconPlay from "../assets/images/icon-play.svg";
import iconStudy from "../assets/images/icon-study.svg"
import iconExercise from "../assets/images/icon-exercise.svg"
import iconSocial from "../assets/images/icon-social.svg"
import iconSelfcare from "../assets/images/icon-self-care.svg"


const TrackerActivity = ({index, title, timewindow, timeframeCurr, timeframePrev}) => {
  
  const iconsArray = [iconWork, iconPlay, iconStudy, iconExercise, iconSocial, iconSelfcare]
  const classesArray = ["work", "play", "study", "exercise", "social", "self-care"]

  return (
    <section className={`activity-tracker__activity ${classesArray[index]}`}>
      <div className="activity__bg">
        <img src={iconsArray[index]} alt="" />
      </div>
      <div className="activity__info">
        <header className="activity__header">
          <h2 className="activity__name">{title}</h2>
          <div className="activity__options">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </header>

        <div className="activity__timeframes">
            <h3 className="activity__current-timeframe">
               {timeframeCurr}hrs
            </h3>
            <div className="activity__previous-timeframe">
                <p className="time-window">{timewindow}</p>
                <p>&nbsp; - &nbsp; </p>
                <p className="time">{timeframePrev}hrs</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrackerActivity;
