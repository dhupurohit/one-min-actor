import { useState } from "react";
import scripts from "../data/scripts.json";
import { getRandomItem } from "../utils/randomizer";
import Timer from "./Timer";
import Recorder from "./Recorder";

export default function ScriptCard() {
  const movies = ["all", ...new Set(scripts.map((s) => s.movie))];

  const [selectedMovie, setSelectedMovie] = useState("all");
  const [script, setScript] = useState(getRandomItem(scripts));

  const generateScript = () => {
    const filtered =
      selectedMovie === "all"
        ? scripts
        : scripts.filter((s) => s.movie === selectedMovie);

    setScript((prev) => getRandomItem(filtered, prev));
  };

  return (
    <div className="card">

      {/* Movie Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {movies.map((m) => (
          <button
            key={m}
            onClick={() => setSelectedMovie(m)}
            className={`tag transition-all ${
              selectedMovie === m ? "tag-active" : ""
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Movie Title */}
      <div className="section">
        <p className="text-highlight">{script?.movie}</p>
        <p className="label">{script?.context}</p>
      </div>

      {/* Dialogue Lines */}
      <div className="section space-y-2">
        {script?.lines.map((line, i) => (
          <p key={i} className="text-main">
            “{line}”
          </p>
        ))}
      </div>

      {/* Button */}
      <button onClick={generateScript} className="btn-primary">
        New Scene
      </button>

      {/* Practice Tools */}
      <div className="section">
        <Timer />
        <Recorder />
      </div>

    </div>
  );
}