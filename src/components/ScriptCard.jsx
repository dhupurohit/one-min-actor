import { useState } from "react";
import scripts from "../data/scripts.json";
import { getRandomItem } from "../utils/randomizer";

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
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {movies.map((m) => (
          <button
            key={m}
            onClick={() => setSelectedMovie(m)}
            className={`tag ${
              selectedMovie === m ? "tag-active" : ""
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Content */}
      <p className="text-highlight">{script?.movie}</p>
      <p className="label">{script?.context}</p>

      <div className="space-y-2 mt-3">
        {script?.lines.map((line, i) => (
          <p key={i} className="text-main">
            “{line}”
          </p>
        ))}
      </div>

      <button onClick={generateScript} className="btn-primary">
        New Scene
      </button>

    </div>
  );
}