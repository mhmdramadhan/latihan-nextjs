import EventItem from './event-item';
import clasess from './event-list.module.css';

function EventList(props) {
  const { items } = props;

  return (
    <ul className={clasess.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
