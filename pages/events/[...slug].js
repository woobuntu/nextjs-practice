import { useRouter } from "next/router";

function FilteredEventsPage() {
  const {
    query: { slug },
  } = useRouter();
  return (
    <div>
      <h1>FilteredEventsPage</h1>
    </div>
  );
}

export default FilteredEventsPage;
