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

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      {isGoodWeather === true ? (
        <h2>
          Awesome weather! <br />
          Go outside and:
        </h2>
      ) : (
        <h2>
          Bad weather! <br />
          Stay inside and:
        </h2>
      )}

      <ul className="list__section">
        {activities.map((activity) => (
          <li className="list__item" key={activity.id}>
            {activity.name}
            <button
              onClick={() => onDeleteActivity(activity.id)}
              type="button"
              className="list__button"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
