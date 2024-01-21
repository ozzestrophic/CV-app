function DeleteButton({ handleClick }) {
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <ion-icon style={{ fontSize: "1.2rem" }} name="trash-outline"></ion-icon>
    </div>
  );
}

export default DeleteButton;
