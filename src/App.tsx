import { useState } from 'react'
import TopBar from './components/TopBar/TopBar';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import TripInfo from './components/TripInfo/TripInfo';
import { data } from './data/data';
import TripOverview from './components/TripOverview/TripOverview';
import Itinerary from './components/Itinerary/Itinerary';
import Exploration from './components/Exploration/Exploration';
const selectedCountry = "Iceland";

function App() {
  const [duration, setDuration] = useState(data.duration);

  return (
    <div className="container">
      <TopBar country={selectedCountry} duration={duration} setDuration={setDuration} />
      <PhotoGallery images={data.photo} />
      <TripInfo duration={duration} regions={data.exploration.length} from={data.flight.fromAirport} flightDuration={data.flight.duration} />
      <TripOverview name={data.name} description={data.description} curator={data.curator} />
      <Itinerary country={selectedCountry} flight={data.flight} dates={data.dates} travellers={data.travellers} />
      {data.exploration.map((item, i) => {
        const id = String.fromCharCode(65 + i);
        return ((<Exploration data={item} id={id} key={id} />))
      })}
    </div>
  )
}

export default App
