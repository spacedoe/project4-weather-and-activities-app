/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

List.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object),
  isGoodWeather: PropTypes.bool,
};

// "activities": [
//   {
//     "id": "c625a813e8f",
//     "name": "Running",
//     "isForGoodWeather": "on"
//   },
// ]

export default function List({
  activities,
  isGoodWeather,
  onDeleteActivity,
}) {
 
  return (
    <>
      <h2>
        {isGoodWeather === true
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>

      <ul className="list__section">
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button
              onClick={() => onDeleteActivity(activity.id)}
              type= "button"
              className="list__delete-button"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
