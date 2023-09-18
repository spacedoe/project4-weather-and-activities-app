import PropTypes from "prop-types";

List.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object),
};

// "activities": [
//   {
//     "id": "c625a813e8f",
//     "name": "Running",
//     "isForGoodWeather": "on"
//   },
// ]

export default function List({ activities }) {
  return (
    <ul className="list__section">
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}
