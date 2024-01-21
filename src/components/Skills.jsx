import Input from "./Input";

function Skills({ title, state, setState }) {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div>^</div>
      </div>

      {state.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-4">
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
    </>
  );
}

export default Skills;
