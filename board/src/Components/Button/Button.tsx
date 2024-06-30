import { MouseEvent } from "react";

export interface IProps {
  px: number;
  py: number;
  color: number;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => {};
  isDisabled?: boolean;
  content: string;
}

const Button = ({
  px,
  py,
  color,
  content,
  onClick = undefined,
  isDisabled = false,
}: IProps): JSX.Element => {
  const pxList = ["px-5", "px-2"];
  const pyList = ["py-3", "py-1"];
  const colorList = [
    {
      base: "bg-yellow-200",
      text: "text-yellow-700",
      hover: "hover:bg-yellow-300",
      focus: "focus:bg-yellow-500",
      focusText: "focus:text-yellow-800",
      disabled: "disabled:bg-yellow-100",
    },
    {
      base: "bg-green-200",
      text: "text-green-700",
      hover: "hover:bg-green-300",
      focus: "focus:bg-green-500",
      focusText: "focus:text-green-800",
      disabled: "disabled:bg-green-100",
    },
    {
      base: "bg-red-200",
      text: "text-red-700",
      hover: "hover:bg-red-300",
      focus: "focus:bg-red-500",
      focusText: "focus:text-red-800",
      disabled: "disabled:bg-red-100",
    },
  ];
  return (
    <button
      type="button"
      className={`${pxList[px]} py-${pyList[py]} ${colorList[color].base} rounded-md shadow-md font-semibold ${colorList[color].text}
      ${colorList[color].hover} ${colorList[color].focus} ${colorList[color].focusText} transition-[background] ${colorList[color].disabled}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
