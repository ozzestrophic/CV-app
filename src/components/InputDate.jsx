function InputDate({ inputName, index, title, state, setState }) {
  return (
    <div className="flex flex-col justify-start gap-1 text-left">
      <label htmlFor={inputName} className="font-semibold">
        {title}
      </label>
      <input
        id={inputName}
        type="date"
        value={state[index][inputName]}
        onChange={(e) => {
          const newValue = state.map((item, stateIndex) =>
            stateIndex === index
              ? { ...item, [inputName]: e.target.value }
              : item,
          );
          setState(newValue);
        }}
        className="rounded-md  bg-slate-100 p-2 focus:outline-slate-300"
      />
    </div>
  );
}

export default InputDate;
