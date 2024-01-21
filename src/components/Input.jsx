function Input({ inputName, value, setValue }) {
  return (
    <div className="flex flex-col justify-start gap-1 text-left">
      <label htmlFor={inputName} className="font-semibold">
        {inputName}
      </label>
      <input
        id={inputName}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="rounded-md  bg-slate-100 p-2 focus:outline-slate-300"
      />
    </div>
  );
}

export default Input;
