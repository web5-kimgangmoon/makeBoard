import { FC, MouseEvent } from "react";
import ItemHeader from "../../../Containers/board/boardList/itemHeader";
import ItemContentBox from "../../../Containers/board/boardList/itemContentBox";
import {
  IBoardItem,
  IBoardItemContentExt,
} from "../../../hooks/board/boardList";

export interface IProps {
  boardItem: IBoardItem;
  setBoardItemContent(itemContent: IBoardItemContentExt): void;
  toggleBoardItemContent(): void;
  unFoldBoardItem(): void;
}

const BoardItem: FC<IProps> = ({
  boardItem,
  setBoardItemContent,
  toggleBoardItemContent,
  unFoldBoardItem,
}) => {
  return (
    <li className="bg-blue-300 shadow-sm overflow-y-hidden relative">
      <ItemHeader item={boardItem.getBoardItemHeader()} />
      <ItemContentBox
        unFoldBoardItem={unFoldBoardItem}
        boardItemContent={boardItem.getBoardItemContent()}
        setBoardItemContent={setBoardItemContent}
        toggleBoardItemContent={toggleBoardItemContent}
      />
    </li>
  );
};

export default BoardItem;
