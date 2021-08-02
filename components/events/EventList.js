import Event from "./Event";
import classes from "./EventList.module.css";

function EventList(props) {
  const { eventList } = props;
  return (
    <ul className={classes.list}>
      {eventList.map((event) => {
        return <Event key={event.id} {...event} />;
      })}
    </ul>
  );
}

export default EventList;
