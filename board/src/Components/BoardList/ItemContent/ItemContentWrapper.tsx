import { FC, ChangeEvent, MouseEvent } from "react";
import ItemContent from "../../../Containers/BoardList/ItemContent";
import { IBoardItemContent as IContent } from "../../../hooks/BoardList/boardList";
import { IBoardItemContentBox } from "../../../hooks/BoardList/itemContentWrapper";

export interface IProps<T> extends IBoardItemContentBox {
  boardItemContent: IContent;
  boxHeight: string;
  openItemContent: (e: ChangeEvent<HTMLInputElement>) => void;
  unFoldBoardItem: () => void;
  onMouseBoard: (e: MouseEvent<HTMLInputElement>) => void;
  clickOneMove?: (e: MouseEvent<HTMLDivElement>) => void;
  selectLike(like: number): void;
  deleteBoard(): void;
}

const ItemContentWrapper = <T extends { id: number }>({
  boardItemContent,
  isOpen,
  isUnFold,
  isLong,
  isAlreadyLook,
  boxHeight,
  onMouseBoard,
  unFoldBoardItem,
  openItemContent,
  clickOneMove,
  selectLike,
  deleteBoard,
}): IProps<T> => {
  return (
    <div
      className={`h-0 transition-[height] ease-in duration-300 has-[:checked]:ease-out has-[:checked]:duration-500 ${
        isUnFold ? "has-[:checked]:max-h-max" : "has-[:checked]:max-h-160"
      }`}
      onClick={!isAlreadyLook ? clickOneMove : undefined}
    >
      <input
        type="checkbox"
        checked={isOpen}
        onChange={openItemContent}
        onMouseOver={!isWritten ? onMouseBoard : undefined}
        className="absolute w-full h-full appearance-none top-0 left-0 cursor-pointer"
        style={{ height: boxHeight }}
      />
      <ItemContent
        item={boardItemContent}
        unFoldBoardItem={unFoldBoardItem}
        isUnFold={isUnFold}
        isLong={isLong}
        selectLike={selectLike}
        deleteBoard={deleteBoard}
      />
    </div>
  );
};
// isLong && isUnFold;
// isLong && !isUnFold;

export default ItemContentWrapper;
