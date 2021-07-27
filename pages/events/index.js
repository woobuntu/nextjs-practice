const dummyEvents = ["event1", "event2", "event3"];
import Link from "next/link";

function EventsPage() {
  return (
    <div>
      <h1>EventsPage</h1>
      <ul>
        {dummyEvents.map((event, index) => (
          <li key={index}>
            <Link href={`/events/${event}`}>{event}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
