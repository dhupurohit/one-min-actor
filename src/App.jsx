import { useState } from "react";
import ModeSelector from "./components/ModeSelector";
import PromptCard from "./components/PromptCard";
import EmotionCard from "./components/EmotionCard";
import ScriptCard from "./components/ScriptCard";

function App() {
  const [mode, setMode] = useState("prompt");

  return (
    <div className="app-container">

      <h1 className="app-title">1-Min Actor</h1>
      <p className="app-subtitle">Practice daily. No pressure.</p>

      <ModeSelector mode={mode} setMode={setMode} />

      <div className="card-container">
        {mode === "prompt" && <PromptCard />}
        {mode === "emotion" && <EmotionCard />}
        {mode === "script" && <ScriptCard />}
      </div>

    </div>
  );
}

export default App;