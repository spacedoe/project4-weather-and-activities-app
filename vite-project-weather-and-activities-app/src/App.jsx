import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import "./components/Form/Form.css";
import List from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";
import Weather from "./components/Weather/Weather";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});

  // cosnt weather =
  const weatherApiUrl = "https://example-apis.vercel.app/api/weather";

  useEffect(() => {
    setWeather("Just check outside! 👀"); // fix later
    async function fetchWeatherData() {
      try {
        const response = await fetch(weatherApiUrl);
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          console.error("Bad response");
        }
      } catch (error) {
        console.error(error);
      }
    }

    const intervalID = setInterval(fetchWeatherData, 5000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  console.log("Weather: ", weather);

  const isGoodWeather = weather.isGoodWeather

  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather === true
  );
  const badWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather === false
  );

  console.log("goodWeatherActivities: ", goodWeatherActivities);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  return (
    <>
      <div>
        <Weather weather={weather} />
        <List
          isGoodWeather={isGoodWeather}
          activities={
            isGoodWeather ? goodWeatherActivities : badWeatherActivities
          }
        />
        <Form onAddActivity={handleAddActivity} />
      </div>
    </>
  );
}

export default App;
