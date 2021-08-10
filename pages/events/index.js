import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function onSearch(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <EventsSearch onSearch={onSearch} />
      <EventList eventList={events} />
    </>
  );
}

export default EventsPage;
