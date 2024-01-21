function Canvas({ skills }) {
  return (
    <section className=" bg-white p-8 shadow-md">
      <div className="">
        <h2>John Doe</h2>

        <div className="flex flex-col justify-start text-left">
          <h2 className="bg-red-100 font-bold">Skills</h2>
          {skills.map((item, index) => {
            return (
              <div key={index}>
                <p>Skill: {item.skill}</p>
                <p>Information: {item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Canvas;
