import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import "./components/Form/Form.css";
import "./components/List/List.css";
import "./components/Weather/Weather.css";
import List from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";
import Weather from "./components/Weather/Weather";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState();

  const weatherApiUrl = "https://example-apis.vercel.app/api/weather";

  useEffect(() => {
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

  const isGoodWeather = weather?.isGoodWeather;

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

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <>
      <Weather weather={weather} />
      {/* only render List component if the weather is defined */}
      {weather && (
        <>
          <List
            isGoodWeather={isGoodWeather}
            activities={
              isGoodWeather ? goodWeatherActivities : badWeatherActivities
            }
            onDeleteActivity={handleDeleteActivity}
          />
          <Form onAddActivity={handleAddActivity} />
        </>
      )}
    </>
  );
}

export default App;
