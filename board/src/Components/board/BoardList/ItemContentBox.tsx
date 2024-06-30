import { FC, ChangeEvent, MouseEvent } from "react";
import ItemContent from "../../../Containers/Board/BoardList/ItemContent";
import { IBoardItemContent as IContent } from "../../../hooks/Board/BoardList";
import { IBoardItemContentBox } from "../../../hooks/Board/ItemContentBox";

export interface IProps extends IBoardItemContentBox {
  boardItemContent: IContent;
  openItemContent: (e: ChangeEvent<HTMLInputElement>) => void;
  unFoldBoardItem: () => void;
  onMouseBoard: (e: MouseEvent<HTMLInputElement>) => void;
  clickOneMove: (e: MouseEvent<HTMLDivElement>) => void;
  selectLike(like: number): void;
  deleteBoard(): void;
}

const ItemContentBox: FC<IProps> = ({
  boardItemContent,
  isOpen,
  isUnFold,
  isLong,
  isAlreadyLook,
  isWritten,
  boxHeight,
  onMouseBoard,
  unFoldBoardItem,
  openItemContent,
  clickOneMove,
  selectLike,
  deleteBoard,
}) => {
  console.log(boxHeight);
  // const heightClass = `has-[:checked]:h-[${boxHeight}px]`;
  return (
    <div
      className={`h-0 
        transition-[height] 
        ease-in 
        duration-300 
        has-[:checked]:ease-out 
        has-[:checked]:duration-500`}
      style={{ height: `${boxHeight}` }}
      onClick={!isAlreadyLook ? clickOneMove : undefined}
    >
      <input
        type="checkbox"
        checked={isOpen}
        onChange={openItemContent}
        onMouseOver={!isWritten ? onMouseBoard : undefined}
        className="absolute w-full h-full appearance-none top-0 left-0 cursor-pointer"
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

export default ItemContentBox;
