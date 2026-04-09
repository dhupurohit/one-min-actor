export default function ModeSelector({ mode, setMode }) {
  const modes = [
    { key: "prompt", label: "Prompt" },
    { key: "emotion", label: "Emotions" },
    { key: "script", label: "Scenes" },
  ];

  return (
    <div className="mode-wrapper">
      {modes.map((m) => (
        <button
          key={m.key}
          onClick={() => setMode(m.key)}
          className={`mode-btn ${mode === m.key ? "mode-active" : ""}`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}