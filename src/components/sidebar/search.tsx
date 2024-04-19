import { InputHTMLAttributes } from "react";
import cx from "classnames";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Search = (props: IProps) => {
  const { className, value, onChange } = props;
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search"
      className={cx(
        "rounded-md border border-gray-400 text-lg p-2 flex-shrink",
        className
      )}
    />
  );
};
