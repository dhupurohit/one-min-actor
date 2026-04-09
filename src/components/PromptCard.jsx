import { useState } from "react";
import prompts from "../data/prompts.json";
import { getRandomItem } from "../utils/randomizer";
import Timer from "./Timer";

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
      {/* Emotion Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {emotions.map((e) => (
          <button
            key={e}
            onClick={() => {
              setSelectedEmotion(e);
              setTimeout(generatePrompt, 0);
            }}
            className={`tag transition-all duration-200 ${
              selectedEmotion === e ? "tag-active" : ""
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      {/* Content */}
      <p className="label">SITUATION</p>
      <p className="text-main">{prompt?.situation}</p>

      <p className="label">EMOTION</p>
      <p className="text-highlight">{prompt?.emotion}</p>

      <p className="label">LINE</p>
      <p className="text-line">“{prompt?.line}”</p>

      <button onClick={generatePrompt} className="btn-primary">
        Generate New
      </button>

      <Timer />
    </div>
  );
}
