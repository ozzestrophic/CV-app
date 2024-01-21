function Canvas({ skills }) {
  return (
    <section className=" bg-white p-8 shadow-md">
      <div className="">
        <h2>John Doe</h2>

        <div className="flex flex-col justify-start text-left">
          <h2 className="bg-red-100 font-bold">Skills</h2>
          {skills.map((item, index) => {
            if (item.show) {
              return (
                <div key={index}>
                  {index !== 0 && (
                    <div className="h-[1px] w-full bg-slate-300"></div>
                  )}
                  <div className="flex items-center justify-between"></div>
                  <p>Skill: {item.skill}</p>
                  <p>Information: {item.info}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Canvas;
