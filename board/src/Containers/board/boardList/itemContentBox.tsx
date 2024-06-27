import { FC, ChangeEvent } from "react";
import ItemContentBoxComp from "../../../Components/board/boradList/itemContentBox";
import {
  IBoardItemContent,
  IBoardItemContentExt,
} from "../../../hooks/board/boardList";
import getBoardItemContent from "../../../getInfo/getBoardItemContent";

export interface IProps {
  boardItemContent: IBoardItemContent;
  setBoardItemContent(itemContent: IBoardItemContentExt): void;
  toggleBoardItemContent():void
  unFoldBoardItem():void;
}
// //   checkScroll(): void; 포함되야한다. 추가해주자.
const ItemContentBox: FC<IProps> = ({
  boardItemContent,
  toggleBoardItemContent,
  setBoardItemContent,
  unFoldBoardItem,
}) => {
  const openItemContent = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("실행");
    if (!boardItemContent.isWritten) setBoardItemContent(getBoardItemContent());
    toggleBoardItemContent();
  };

  return (
    <ItemContentBoxComp
      openItemContent={openItemContent}
      boardItemContent={boardItemContent}
      unFoldBoardItem={unFoldBoardItem}
    />
  );
};

export default ItemContentBox;
