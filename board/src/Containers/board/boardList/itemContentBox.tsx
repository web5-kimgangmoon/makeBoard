import { FC, ChangeEvent, MouseEvent } from "react";
import ItemContentBoxComp from "../../../Components/Board/BoardList/ItemContentBox";
import {
  IBoardItemContent,
  IBoardItemContentExt,
} from "../../../hooks/Board/BoardList";
import useItemContentBox from "../../../hooks/Board/ItemContentBox";
import getBoardItemContent from "../../../getInfo/getBoardItemContent";

export interface IProps {
  boardItemContent: IBoardItemContent;
  setBoardItemContent(itemContent: IBoardItemContentExt): void;
  selectLike(like: number): void;
  deleteBoard(): void;
  addLook(): void;
}
// //   checkScroll(): void; 포함되야한다. 추가해주자.
const ItemContentBox: FC<IProps> = ({
  boardItemContent,
  setBoardItemContent,
  selectLike,
  deleteBoard,
  addLook,
}) => {
  const {
    writeBoardItemContent,
    toggleBoardItemContent,
    toggleUnFoldBoardItem,
    getItemContentBox,
    checkIsLong,
    setIsAlreadyLook,
    setHeight,
  } = useItemContentBox();
  const itemContentBox = getItemContentBox();
  const onMouseBoard = (e: MouseEvent<HTMLInputElement>) => {
    if (!itemContentBox.isWritten) {
      setBoardItemContent(getBoardItemContent());
      writeBoardItemContent();
    }
  };
  const openItemContent = (e: ChangeEvent<HTMLInputElement>) => {
    if (itemContentBox.isUnFold) toggleUnFoldBoardItem();
    toggleBoardItemContent();
  };
  const clickOneMove = (e: MouseEvent<HTMLDivElement>) => {
    const height = document.getElementById(
      `${boardItemContent.id}BoardItemContent`
    )?.offsetHeight;
    const height2 = document.getElementById(
      `${boardItemContent.id}BoardItemContentBox`
    )?.offsetHeight;
    if (height !== undefined && height > 300) {
      checkIsLong();
    }
    addLook();
    setHeight(height2 ? height2 : 0);
    console.log(height2);
    setIsAlreadyLook();
  };
  const boxHeight = itemContentBox.isUnFold
    ? "max-content"
    : itemContentBox.isOpen
    ? itemContentBox.boxHeight + "px"
    : "0";
  return (
    <ItemContentBoxComp
      boardItemContent={boardItemContent}
      isWritten={itemContentBox.isWritten}
      isOpen={itemContentBox.isOpen}
      isUnFold={itemContentBox.isUnFold}
      isLong={itemContentBox.isLong}
      isAlreadyLook={itemContentBox.isAlreadyLook}
      boxHeight={boxHeight}
      onMouseBoard={onMouseBoard}
      openItemContent={openItemContent}
      unFoldBoardItem={toggleUnFoldBoardItem}
      clickOneMove={clickOneMove}
      selectLike={selectLike}
      deleteBoard={deleteBoard}
    />
  );
};

export default ItemContentBox;
