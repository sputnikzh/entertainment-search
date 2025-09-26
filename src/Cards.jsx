import Card from "./Card";
function Cards(props) {
  const cards = props.cards;

  return(
    <div className="cards">
      {cards.map((card) => (
        <Card
          poster={card.Poster}
          title={card.Title}
          year={card.Year}
          type={card.Type}
        />
      ))}
    </div>
  );
}
export default Cards;
