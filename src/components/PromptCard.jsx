import { useState } from "react";
import prompts from "../data/prompts.json";
import { getRandomItem } from "../utils/randomizer";
import Timer from "./Timer";
import Recorder from "./Recorder";

const emotions = ["all", "hurt", "guilt", "proud", "sad"];

export default function PromptCard() {
  const [selectedEmotion, setSelectedEmotion] = useState("all");
  const [prompt, setPrompt] = useState(getRandomItem(prompts));

  const generatePrompt = () => {
    let filtered =
      selectedEmotion === "all"
        ? prompts
        : prompts.filter((p) => p.emotion === selectedEmotion);

    setPrompt((prev) => getRandomItem(filtered, prev));
  };

  return (
    <div className="card">
      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {emotions.map((e) => (
          <button
            key={e}
            onClick={() => {
              setSelectedEmotion(e);
              setTimeout(generatePrompt, 0);
            }}
            className={`tag transition-all ${
              selectedEmotion === e ? "tag-active" : ""
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      {/* Situation */}
      <div className="section">
        <p className="label">SITUATION</p>
        <p className="text-main">{prompt?.situation}</p>
      </div>

      {/* Emotion */}
      <div className="section">
        <p className="label">EMOTION</p>
        <p className="text-highlight">{prompt?.emotion}</p>
      </div>

      {/* Line */}
      <div className="section">
        <p className="label">LINE</p>
        <p className="text-line">“{prompt?.line}”</p>
      </div>

      {/* Button */}
      <button onClick={generatePrompt} className="btn-primary">
        Generate New
      </button>

      {/* Timer + Recorder */}
      <div className="section">
        <Timer />
        <Recorder />
      </div>
    </div>
  );
}
