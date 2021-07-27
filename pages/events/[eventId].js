import { useRouter } from "next/router";

function EventDetailPage() {
  const {
    query: { eventId },
  } = useRouter();
  return (
    <div>
      <h1>EventDetailPage - {eventId}</h1>
    </div>
  );
}

export default EventDetailPage;
