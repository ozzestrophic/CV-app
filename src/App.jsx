import { useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas.jsx";
import Card from "./components/Card.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  const [skillsState, setSkillsState] = useState([
    {
      index: 0,
      skill: "ball",
      info: "footballer",
      show: true,
    },
  ]);
  return (
    <main className="grid h-full w-full grid-cols-2 gap-4 bg-slate-100 p-10">
      <div className="flex flex-col gap-4">
        <Card>
          <Skills
            title={"Skills"}
            value={skillsState}
            setValue={setSkillsState}
          />
        </Card>
        <Card>Projects</Card>
      </div>
      <Canvas skills={skillsState} />
    </main>
  );
}

export default App;
