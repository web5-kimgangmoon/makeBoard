import { FC, ChangeEvent, MouseEvent } from "react";
import ItemContentBoxComp from "../../../Components/Board/BoardList/ItemContentBox";
import {
  IBoardItemContent,
  IBoardItemContentExt,
} from "../../../hooks/Board/boardList";
import useItemContentBox from "../../../hooks/Board/itemContentBox";
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
    if (height !== undefined && height > 300) {
      checkIsLong();
    }
    addLook();
    setIsAlreadyLook();
  };
  return (
    <ItemContentBoxComp
      boardItemContent={boardItemContent}
      isWritten={itemContentBox.isWritten}
      isOpen={itemContentBox.isOpen}
      isUnFold={itemContentBox.isUnFold}
      isLong={itemContentBox.isLong}
      isAlreadyLook={itemContentBox.isAlreadyLook}
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
