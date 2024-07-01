import { ChangeEvent, MouseEvent } from "react";
import ItemContent from "../../../Containers/BoardList/ItemContent";
import { IContent } from "../../BoardList/BoardList";

export interface IProps<T> {
  id: number;
  valueObj: T;
  content: IContent;
  currentHeight: string;
  isOpen: boolean;
  isUnFold: boolean;
  isLong: boolean;
  onClickBoard: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickOnceBoard: ((e: MouseEvent<HTMLDivElement>) => void) | undefined;
  onClickUnFoldButton: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseBoard?: (e: MouseEvent<HTMLInputElement>) => void;
}

const ItemContentWrapper = <T extends {}>({
  id,
  valueObj,
  content,
  currentHeight,
  isOpen,
  isUnFold,
  isLong,
  onClickBoard,
  onClickOnceBoard,
  onClickUnFoldButton,
  onMouseBoard,
}: IProps<T>): JSX.Element => {
  return (
    <div
      className={`h-0 transition-[height] ease-in duration-300 has-[:checked]:ease-out has-[:checked]:duration-500`}
      style={{ height: currentHeight }}
      onClick={onClickOnceBoard}
    >
      <input
        type="checkbox"
        checked={isOpen}
        onChange={onClickBoard}
        onMouseOver={onMouseBoard}
        className="absolute w-full h-full appearance-none top-0 left-0 cursor-pointer"
      />
      <ItemContent<T>
        id={id}
        valueObj={valueObj}
        content={content}
        isUnFold={isUnFold}
        isLong={isLong}
        onClickUnFoldButton={onClickUnFoldButton}
      />
    </div>
  );
};

export default ItemContentWrapper;
