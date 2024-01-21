export default function CanvasSkills({ skills }) {
  return (
    <div className=" mb-2 flex flex-col justify-start gap-2 text-left">
      {skills.length > 0 && <h2 className="bg-red-100 font-bold">Skills</h2>}

      {skills.map((item, index) => {
        if (item.show) {
          return (
            <div key={index}>
              {index !== 0 && (
                <div className="my-2 h-[1px] w-full bg-slate-300"></div>
              )}
              <div className="flex items-center justify-between"></div>
              <p>Skill: {item.skill}</p>
              <p>Information: {item.info}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
