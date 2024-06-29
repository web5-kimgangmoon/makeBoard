import { MouseEvent } from "react";

export interface IProps {
  px: number;
  py: number;
  color: string;
  content: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => {};
  isDisabled?: boolean;
}

const Button = ({
  px,
  py,
  color,
  content,
  onClick = undefined,
  isDisabled = false,
}: IProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`px-${px} py-${py} bg-${color}-200 rounded-md shadow-md font-semibold text-${color}-700
hover:bg-${color}-300 focus:bg-${color}-500 focus:text-${color}-800 transition-[background]`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
