import EventItem from './event-item';

function EventList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <EventItem item />
      ))}
    </ul>
  );
}
