import { useState, useRef } from "react";

export default function Recorder() {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);

  const mediaRecorder = useRef(null);
  const chunks = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    mediaRecorder.current = new MediaRecorder(stream);

    mediaRecorder.current.ondataavailable = (e) => {
      chunks.current.push(e.data);
    };

    mediaRecorder.current.onstop = () => {
      const blob = new Blob(chunks.current, { type: "video/mp4" });
      setVideoURL(URL.createObjectURL(blob));
      chunks.current = [];
    };

    mediaRecorder.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.current.stop();
    setRecording(false);
  };

  return (
    <div className="text-center space-y-3 mt-3">
      {!recording ? (
        <button onClick={startRecording} className="btn-primary">
          Start Recording
        </button>
      ) : (
        <button onClick={stopRecording} className="btn-primary">
          Stop Recording
        </button>
      )}

      {videoURL && (
        <video src={videoURL} controls className="mt-2 rounded-xl w-full" />
      )}
    </div>
  );
}
