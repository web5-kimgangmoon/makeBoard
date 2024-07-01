import { MouseEvent } from "react";
import StretchButton from "./StretchButton";

interface IProps {
  id: number;
  value: string;
  isLong: boolean;
  isUnFold: boolean;
  btnContent: string;
  onClickUnFoldButton: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Content = ({
  isLong,
  isUnFold,
  id,
  value,
  btnContent,
  onClickUnFoldButton,
}: IProps): JSX.Element => {
  const content_max = isLong && isUnFold ? "" : "max-h-boardContentHeight";
  const isStretchButton = isLong && !isUnFold ? true : false;
  return (
    <div
      className={`${content_max} border-b-4 
      border-gray-300 border-double 
      whitespace-pre-wrap overflow-hidden 
      relative`}
    >
      <span id={`${id}BoardItemContent`}>{value}</span>
      {isStretchButton ? (
        <StretchButton
          onClickUnFoldButton={onClickUnFoldButton}
          content={btnContent}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Content;
