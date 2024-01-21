import Input from "./Input";

function Skills({ title, value, setValue }) {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div>^</div>
      </div>

      <div className="flex flex-col gap-4">
        {/* <Input inputName="Skill" value={value[0].skill} setValue={setValue} /> */}
        <Input inputName="Skill" value={value} setValue={setValue} />
        <Input
          inputName="Information/Subskill"
          value={value}
          setValue={setValue}
        />
      </div>
    </>
  );
}

export default Skills;
