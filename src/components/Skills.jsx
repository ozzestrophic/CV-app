import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import HideButton from "./HideButton";
import Input from "./Input";

function Skills({ title, state, setState }) {
  function deleteFunction(index) {
    const newState = [...state];
    newState.splice(index, 1);
    setState(newState);
  }

  function hideFunction(index) {
    // let newState = [...state];
    const newState = state.map((item, stateIndex) => {
      if (stateIndex !== index) return item;
      return { ...item, show: !item.show };
    });
    console.log("new state is ", newState);
    setState(newState);
  }

  return (
    <>
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div></div>
      </div>
      {state.map((item, index) => {
        return (
          <div key={index} className="flex flex-col justify-start gap-4">
            {index !== 0 && <div className="h-[1px] w-full bg-slate-300"></div>}
            <div className="flex items-center justify-between">
              <h3 className=" text-left font-bold text-rose-500">
                # {index + 1}
              </h3>
              <div className="flex gap-2">
                <HideButton
                  handleClick={() => {
                    hideFunction(index);
                  }}
                />
                <DeleteButton
                  handleClick={() => {
                    deleteFunction(index);
                  }}
                />
              </div>
            </div>
            <Input
              inputName="skill"
              index={index}
              title={"Skill"}
              state={state}
              setState={setState}
            />
            <Input
              inputName="info"
              index={index}
              title={"Information/Sub-skill"}
              state={state}
              setState={setState}
            />
          </div>
        );
      })}

      <AddButton
        handleClick={() => {
          const newState = [...state];
          newState.push({ skill: "", info: "", show: true });
          setState(newState);
        }}
      />
    </>
  );
}

export default Skills;
