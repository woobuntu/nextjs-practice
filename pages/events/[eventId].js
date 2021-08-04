import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";

function EventDetailPage() {
  const {
    query: { eventId },
  } = useRouter();

  const eventDetail = getEventById(eventId);

  if (!eventDetail) return <p>No event found!</p>;

  const { title, description, location, date, image } = eventDetail;

  const logisticsProps = {
    date,
    address: location,
    image,
    imageAlt: title,
  };

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics {...logisticsProps} />
      <EventContent>{description}</EventContent>
    </>
  );
}

export default EventDetailPage;
