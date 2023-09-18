# TODO: 
## 1. Local Storage: 
   
import useLocalStorageState from "use-local-storage-state";

export default function App() {
const [note, setNote] = useLocalStorageState("note", {defaultValue: ""});


## 2. Filter: 

const [filter, setFilter] = useState("all");
const favoriteEntries = entries.filter((entry) => entry.isFavorite === true);
 
 
 <EntriesSection
          entries={filter === "all" ? entries : favoriteEntries}
          filter={filter}
/>


## 3. Fetch: 

 try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/status"
      );

      console.log(response.ok);
      response.ok ? setStatusIcon("✅") : setStatusIcon("❌");

      //Alternative solution:
      // if (response.ok) {
      //   const data = await response.json();
      //   console.log(data);
      //   setStatusIcon("✅");
      // } else {
      //   console.error("Bad response");
      //   setStatusIcon("❌");
      // }

    } catch (error) {
      console.log(error);
      setStatusIcon("🚨");
    }


## 4. Delete button: 
    in App component: 
    function handleDeleteMovie(id) {
    setMovies(movies.filter(movie => movie.id !== id))
    }

    In Movie component: 

    export default function Movie({ name, isLiked, id, onDeleteMovie, onToggleLike}) {
        ...
    <button onClick={function(){onDeleteMovie(id)}} className="movie__button" type="button" title="delete movie">
        ✕
    </button>
    }


 ## Bonus: Fetch on Intervall:

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    const response = await fetch(
      "https://api.wheretheiss.at/v1/satellites/25544"
    );
    const data = await response.json();

    setCoords({ longitude: data.longitude, latitude: data.latitude });
  }

  useEffect(() => {
    const intervalID = setInterval(getISSCoords, 5000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);




