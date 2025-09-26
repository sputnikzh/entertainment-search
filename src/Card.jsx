function Card(props) {
  const poster = props.poster;
  const title = props.title;
  const year = props.year;
  const type = props.type;

  return (
    <div className="card">
      <img src={poster} alt="poster" />
      <h1>{title}</h1>
      <h2>{year}</h2>
      <p>{type}</p>
    </div>
  );
}
export default Card;
