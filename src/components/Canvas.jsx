function Canvas({ skills }) {
  return (
    <section className=" bg-white p-8 shadow-md">
      <div className="">
        <h2>John Doe</h2>

        <div className="flex flex-col justify-start text-left">
          <h2 className="bg-red-100 font-bold">Skills</h2>
          <p>Skill: {skills[0].skill}</p>
          <p>Information: {skills[0].info}</p>
        </div>
      </div>
    </section>
  );
}

export default Canvas;
