function DeleteButton({ index, state, setState }) {
  function deleteFunction(index) {
    const newState = [...state];
    newState.splice(index, 1);
    setState(newState);
  }
  return (
    <div className="cursor-pointer" onClick={() => deleteFunction(index)}>
      <ion-icon style={{ fontSize: "1.2rem" }} name="trash-outline"></ion-icon>
    </div>
  );
}

export default DeleteButton;
