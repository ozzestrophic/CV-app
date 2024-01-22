import CanvasEducation from "./CanvasEducation";
import CanvasExperience from "./CanvasExperience";
import CanvasPersonal from "./CanvasPersonal";
import CanvasProjects from "./CanvasProjects";
import CanvasSkills from "./CanvasSkills";

function Canvas({
  skills,
  projects,
  personalInfo,
  experienceState,
  educationState,
}) {
  return (
    <section className=" h-[800px] bg-white p-8 shadow-md">
      <div className="">
        {/* <h2>John Doe</h2> */}
        <CanvasPersonal personalInfo={personalInfo} />
        <CanvasSkills skills={skills} />
        <CanvasProjects projects={projects} />
        <CanvasExperience state={experienceState} />
        <CanvasEducation state={educationState} />
      </div>
    </section>
  );
}

export default Canvas;
