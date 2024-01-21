function HideButton({ index, state, setState }) {
  function hideFunction(e, index) {
    // let newState = [...state];
    const newState = state.map((item, stateIndex) => {
      if (stateIndex !== index) return item;
      return { ...item, show: !item.show };
    });
    setState(newState);
    e.target.name === "eye"
      ? (e.target.name = "eye-off")
      : (e.target.name = "eye");
  }

  return (
    <div className="cursor-pointer" onClick={(e) => hideFunction(e, index)}>
      <ion-icon style={{ fontSize: "1.2rem" }} name="eye"></ion-icon>
    </div>
  );
}

export default HideButton;
