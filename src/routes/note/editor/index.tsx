import cx from "classnames";
import { VoiceRecorder } from "./voice-recorder";
import React, { ChangeEvent, TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Editor = (props: IProps) => {
  const { className, name, value: defaultValue = "" } = props;
  const [value, setValue] = React.useState<string>(defaultValue as string);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleRecognition = (recordedTextChunk: string) => {
    if (recordedTextChunk.length !== 0) {
      setValue((value) => {
        return `${value} ${recordedTextChunk}`;
      });
    }
  };

  return (
    <div className={cx("relative w-full flex-1", className)}>
      <textarea
        key={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full h-full text-xl p-3 border rounded-lg outline-offset-4 resize-none pb-16"
        placeholder="Write or record something..."
      />
      <VoiceRecorder
        onRecognition={handleRecognition}
        className="absolute bottom-5 right-5"
      />
    </div>
  );
};
