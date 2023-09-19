import PropTypes from "prop-types";

// Why eslint is showing the error for missing prop types
// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
// Solution with npm "prop-types" package:
// https://www.npmjs.com/package/prop-types

Form.propTypes = {
  onAddActivity: PropTypes.func,
};

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    data.isForGoodWeather = event.target.isForGoodWeather.checked === true

    onAddActivity(data);
    // const name = event.target.name.value
    // const isForGoodWeather = event.target.isForGoodWeather.checked
    // console.log(name, isForGoodWeather);
    // onAddActivity({name: name, isForGoodWeather: isForGoodWeather});

    event.target.reset();
    event.target.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Add new activity:</h1>

      <div className="input__section">
        <label className="input__label" htmlFor="name">
          Name:
        </label>
        <input
          className="input__input"
          type="text"
          id="name"
          name="name"
        ></input>
      </div>

      <div className="input__section">
        <label className="input__label" htmlFor="isForGoodWeather">
          Good-weather activity:
        </label>
        <input
          type="checkbox"
          id="isForGoodWeather"
          name="isForGoodWeather"
        ></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
