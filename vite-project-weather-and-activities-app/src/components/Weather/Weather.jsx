/* eslint-disable react/prop-types */
// Weather.propTypes = {
//     weather: PropTypes.arrayOf(PropTypes.object)
//   };

export default function Weather({ weather }) {
  return (
    <div className="weather__section">
      {/* if weather is falsy (undefined, null, etc.) */}
      {!weather && <h1> Checking the weather...</h1>}
      {weather && (
        <>
          <h1>{weather.condition}</h1>
          <h1>{`${weather.temperature} °C`}</h1>
        </>
      )}
    </div>
  );
}
