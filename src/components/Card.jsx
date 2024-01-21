import Input from "./Input";

function Card({ title }) {
  return (
    <div className=" flex flex-col justify-start gap-8 rounded-xl bg-white p-8 shadow-md">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div>^</div>
      </div>

      <div className="flex flex-col gap-4">
        <Input inputName="Skill" />
        <Input inputName="Information/Subskill" />
      </div>
    </div>
  );
}

export default Card;
