import React from "react";
import cx from "classnames";

import { recognition } from "./lib";
import { MicroIcon } from "../../../../icons/micro";
import { StopIcon } from "../../../../icons/stop";

interface IProps {
  className?: string;
  onRecognition: (textChunk: string) => void;
}

export const VoiceRecorder = (props: IProps) => {
  const [isRecording, setIsRecording] = React.useState(false);

  const { className, onRecognition } = props;

  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    recognition.addEventListener("result", (event) => {
      const lastResultEvent = event.results[event.results.length - 1];
      if (lastResultEvent.isFinal) {
        onRecognition(lastResultEvent[0].transcript);
      }
    });

    recognition.addEventListener("end", () => {
      recognition.stop();
      setIsRecording(false);
    });

    return () => {
      recognition.abort();
    };
  }, []);

  const handleStartRecord = () => {
    recognition.start();
    setIsRecording(true);
  };

  const handleStopRecord = () => {
    recognition.stop();
    setIsRecording(true);
  };

  return (
    <button
      className={cx(
        "flex items-center justify-center rounded-full w-14 h-14 text-white",
        isRecording ? "bg-red-400" : " bg-slate-400",
        className
      )}
      type="button"
      onClick={!isRecording ? handleStartRecord : handleStopRecord}
      ref={ref}
    >
      {!isRecording ? <MicroIcon /> : <StopIcon />}
    </button>
  );
};
