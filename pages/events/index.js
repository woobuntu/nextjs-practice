import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

function EventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList eventList={events} />
    </div>
  );
}

export default EventsPage;
