import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

function FilteredEventsPage() {
  const {
    query: { slug },
  } = useRouter();
  // useRouter훅은 컴포넌트 초기 렌더링 이후에 실행된다.
  console.log(slug);

  if (!slug) return <p className="center">로딩 중...</p>;
  // 초기 렌더링 시에 slug는 존재하지 않으므로

  const [year, month] = slug;

  const filteredYear = +year;
  const filteredMonth = +month;

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  )
    return <p>그냥 타입스크립트 씁시다!</p>;

  const filteredEvents = getFilteredEvents({ year: +year, month: +month });

  if (!filteredEvents || !filteredEvents.length)
    return <p>그냥 타입스크립트 씁시다!</p>;

  return (
    <div>
      <EventList eventList={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
