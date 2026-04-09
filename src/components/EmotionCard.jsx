import { useState } from "react";
import lines from "../data/lines.json";
import { getRandomItem } from "../utils/randomizer";
import Timer from "./Timer";

const emotions = ["happy", "sad", "angry", "confused", "calm"];

export default function EmotionCard() {
  const [line, setLine] = useState(getRandomItem(lines));
  const [selected, setSelected] = useState([]);

  const toggleEmotion = (e) => {
    setSelected((prev) =>
      prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e],
    );
  };

  const displayEmotions = selected.length > 0 ? selected : emotions;

  return (
    <div className="card">
      <p className="label">LINE</p>
      <p className="text-line mb-4">“{line}”</p>

      <p className="label">SELECT EMOTIONS</p>

      {/* Selection Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {emotions.map((e) => (
          <button
            key={e}
            onClick={() => toggleEmotion(e)}
            className={`tag transition-all ${
              selected.includes(e) ? "tag-active" : ""
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      {/* Display Only Selected */}
      <div className="mt-4 space-y-1">
        {displayEmotions.map((e) => (
          <p key={e} className="text-main">
            → Say in <span className="text-purple-600">{e}</span>
          </p>
        ))}
      </div>

      <button
        onClick={() => setLine((prev) => getRandomItem(lines, prev))}
        className="btn-primary"
      >
        New Line
      </button>

      <Timer />
    </div>
  );
}
