export default function toggleCard(shownCard, setShownCard, cardIndex) {
  shownCard === cardIndex ? setShownCard(0) : setShownCard(cardIndex);
}
