import { FC } from "react";
import BoardList from "./boradList/boardList";
import { IBoardItem, IBoardItemContentExt } from "../../hooks/board/boardList";

export interface IProps {
  setBoardItemContent(id: number, itemContent: IBoardItemContentExt): void;
  toggleBoardItemContent(id: number): void;
  getBoardItemList(): IBoardItem[];
}

const Body: FC<IProps> = ({
  getBoardItemList,
  setBoardItemContent,
  toggleBoardItemContent,
}) => {
  return (
    <div className="py-3" id="body">
      <div className="container max-sm:p-0 min-w-[450px]">
        <BoardList
          getBoardItemList={getBoardItemList}
          setBoardItemContent={setBoardItemContent}
          toggleBoardItemContent={toggleBoardItemContent}
        />
      </div>
    </div>
  );
};

export default Body;
