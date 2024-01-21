import "./App.css";
import Canvas from "./components/Canvas.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <main className="grid h-full w-full grid-cols-2 gap-4 bg-slate-100 p-10">
      <Card title="Skills" />
      <Canvas />
    </main>
  );
}

export default App;
