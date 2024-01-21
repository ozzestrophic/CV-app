import { useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas.jsx";
import Card from "./components/Card.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  const [shownCard, setShownCard] = useState(1);
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
  return (
    <main className="grid h-full w-full grid-cols-2 gap-4 bg-slate-100 p-10">
      <div className="flex flex-col gap-4">
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
      </div>
      <Canvas skills={skillState} projects={projectState} />
    </main>
  );
}

export default App;
