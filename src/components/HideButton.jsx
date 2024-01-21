function HideButton({ handleClick }) {
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <ion-icon style={{ fontSize: "1.2rem" }} name="eye"></ion-icon>
    </div>
  );
}

export default HideButton;
