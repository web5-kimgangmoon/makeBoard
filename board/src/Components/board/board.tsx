import { FC } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Body from "./body";
import { IBoardItem, IBoardItemContentExt } from "../../hooks/board/boardList";

export interface IProps {
  getBoardItemList(): IBoardItem[];
  setBoardItemContent(id: number, itemContent: IBoardItemContentExt): void;
  toggleBoardItemContent(id: number): void;
  unFoldBoardItem(id: number): void;
}

const Board: FC<IProps> = ({
  getBoardItemList,
  setBoardItemContent,
  toggleBoardItemContent,
  unFoldBoardItem,
}) => {
  return (
    <div className="bg-gray-200 min-h-[100vh] font-sans text-blue-700">
      <Header />
      <Body
        getBoardItemList={getBoardItemList}
        setBoardItemContent={setBoardItemContent}
        toggleBoardItemContent={toggleBoardItemContent}
        unFoldBoardItem={unFoldBoardItem}
      />
      <footer className="" id="footer"></footer>
    </div>
  );
};

export default Board;
