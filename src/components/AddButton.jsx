function AddButton({ handleClick }) {
  return (
    <button
      className="rounded-lg border-2 border-solid border-rose-400 p-2 text-rose-500"
      onClick={handleClick}
    >
      Add new skill
    </button>
  );
}

export default AddButton;
