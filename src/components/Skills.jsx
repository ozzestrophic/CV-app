import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import HideButton from "./HideButton";
import Input from "./Input";
import CardTab from "./CardTab";

function Skills({ title, shownCard, setShownCard, state, setState }) {
  const cardIndex = 1;

  if (shownCard === cardIndex) {
    return (
      <>
        <CardTab
          cardIndex={cardIndex}
          title={title}
          shownCard={shownCard}
          setShownCard={setShownCard}
        />
        {state.map((item, index) => {
          return (
            <div key={index} className="flex flex-col justify-start gap-4">
              {index !== 0 && (
                <div className="h-[1px] w-full bg-slate-300"></div>
              )}
              <div className="flex items-center justify-between">
                <h3 className=" text-left font-bold text-rose-500">
                  # {index + 1}
                </h3>
                <div className="flex gap-2">
                  <HideButton index={index} state={state} setState={setState} />
                  <DeleteButton
                    index={index}
                    state={state}
                    setState={setState}
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
  } else {
    return (
      <>
        <CardTab
          cardIndex={cardIndex}
          title={title}
          shownCard={shownCard}
          setShownCard={setShownCard}
        />
      </>
    );
  }
}

export default Skills;
