import { FC } from "react";
import BoardList from "./boradList/boardList";
import { IBoardItem, IBoardItemContentExt } from "../../hooks/board/boardList";

export interface IProps {
  setBoardItemContent(id: number, itemContent: IBoardItemContentExt): void;
  toggleBoardItemContent(id: number): void;
  getBoardItemList(): IBoardItem[];
  unFoldBoardItem(id: number): void;
}

const Body: FC<IProps> = ({
  getBoardItemList,
  setBoardItemContent,
  toggleBoardItemContent,
  unFoldBoardItem,
}) => {
  return (
    <div className="py-3" id="body">
      <div className="container max-sm:p-0 pr-4">
        <BoardList
          getBoardItemList={getBoardItemList}
          setBoardItemContent={setBoardItemContent}
          toggleBoardItemContent={toggleBoardItemContent}
          unFoldBoardItem={unFoldBoardItem}
        />
      </div>
    </div>
  );
};

export default Body;
