import toggleCard from "../toggleCard";

function CardTab({ title, shownCard, setShownCard, cardIndex }) {
  return (
    <div
      className="flex cursor-pointer justify-between"
      onClick={() => toggleCard(shownCard, setShownCard, cardIndex)}
    >
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div>
        {shownCard === cardIndex ? (
          <ion-icon name="chevron-up-outline"></ion-icon>
        ) : (
          <ion-icon name="chevron-down-outline"></ion-icon>
        )}
      </div>
    </div>
  );
}

export default CardTab;
