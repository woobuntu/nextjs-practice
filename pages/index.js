import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

function StartingPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList eventList={featuredEvents} />
    </div>
  );
}

export default StartingPage;
