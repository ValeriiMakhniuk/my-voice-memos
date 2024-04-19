import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Title = (props: IProps) => {
  const { name, value } = props;

  return (
    <label className="text-2xl">
      <span className="block mb-1">Title</span>
      <input
        type="text"
        className="w-full text-2xl p-3 border rounded-lg outline-offset-4"
        placeholder="My new Memo"
        name={name}
        defaultValue={value}
      />
    </label>
  );
};
