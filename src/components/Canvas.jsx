function Canvas({ skills }) {
  return (
    <section className=" bg-white p-8 shadow-md">
      <div className="">
        <h2>John Doe</h2>

        <div>
          <h2>Skills</h2>
          <p>{skills[0].skill}</p>
          <p>{skills[0].info}</p>
        </div>
      </div>
    </section>
  );
}

export default Canvas;
