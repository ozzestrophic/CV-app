import CanvasProjects from "./CanvasProjects";
import CanvasSkills from "./CanvasSkills";

function Canvas({ skills, projects }) {
  return (
    <section className=" bg-white p-8 shadow-md">
      <div className="">
        <h2>John Doe</h2>

        <CanvasSkills skills={skills} />
        <CanvasProjects projects={projects} />
      </div>
    </section>
  );
}

export default Canvas;
