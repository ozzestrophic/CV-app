import { useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas.jsx";
import Card from "./components/Card.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Personal from "./components/Personal.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";

function App() {
  const [shownCard, setShownCard] = useState(1);

  const [personalInfo, setPersonalInfo] = useState([
    {
      name: "John Doe",
      email: "John@Doe.com",
      phone: "0123456789",
      address: "Cairo, Egypt",
    },
  ]);
  const [skillState, setSkillState] = useState([
    {
      skill: "",
      info: "",
      show: true,
    },
  ]);
  const [projectState, setProjectState] = useState([
    {
      project: "",
      description: "",
      show: true,
    },
  ]);
  const [experienceState, setExperienceState] = useState([
    {
      job: "Developer",
      employer: "Google",
      description: "Working",
      start: "2023-12-23",
      end: "",
      show: true,
    },
  ]);
  const [educationState, setEducationState] = useState([
    {
      school: "Cairo University",
      major: "Computer Science",
      description: "studied",
      start: "2018-09-12",
      end: "2022-05-22",
      show: true,
    },
  ]);
  return (
    <main className="grid h-screen w-screen grid-cols-1 gap-4 bg-slate-100 p-10 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <Card>
          <Personal
            shownCard={shownCard}
            setShownCard={setShownCard}
            title={"Personal Info"}
            state={personalInfo}
            setState={setPersonalInfo}
          />
        </Card>
        <Card>
          <Skills
            shownCard={shownCard}
            setShownCard={setShownCard}
            title={"Skills"}
            state={skillState}
            setState={setSkillState}
          />
        </Card>
        <Card>
          <Projects
            shownCard={shownCard}
            setShownCard={setShownCard}
            title={"Projects"}
            state={projectState}
            setState={setProjectState}
          />
        </Card>
        <Card>
          <Experience
            shownCard={shownCard}
            setShownCard={setShownCard}
            title={"Experience"}
            state={experienceState}
            setState={setExperienceState}
          />
        </Card>
        <Card>
          <Education
            shownCard={shownCard}
            setShownCard={setShownCard}
            title={"Education"}
            state={educationState}
            setState={setEducationState}
          />
        </Card>
      </div>
      <Canvas
        skills={skillState}
        projects={projectState}
        personalInfo={personalInfo}
        experienceState={experienceState}
        educationState={educationState}
      />
    </main>
  );
}

export default App;
