/* eslint-disable react/prop-types */
// Weather.propTypes = {
//     weather: PropTypes.arrayOf(PropTypes.object)
//   };

export default function Weather({ weather }) {
  return (
    <div className="weather__section">
      {weather === undefined && (<h1> Checking the weather...</h1>)}
      {weather !== undefined && (
        <>
          <h1>{weather.condition}</h1>
          <h1>{`${weather.temperature} ℃`}</h1>
        </>
      )}
    </div>
  );
}
