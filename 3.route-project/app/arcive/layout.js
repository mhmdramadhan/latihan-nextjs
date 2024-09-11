export default function ArciveLayout({ arcive, latest }) {
  return (
    <div>
      <h1>News Arcive</h1>
      <section id="archive-filter">{arcive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
