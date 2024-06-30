import { FC } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import { IBoardItem, IBoardItemContentExt } from "../../hooks/Board/BoardList";

export interface IProps {
  getBoardItemList(): IBoardItem[];
  setBoardItemContent(id: number, itemContent: IBoardItemContentExt): void;
  selectLike(id: number, like: number): void;
  deleteBoardItem(id: number): void;
  addLook(id: number): void;
}

const Board: FC<IProps> = ({
  getBoardItemList,
  setBoardItemContent,
  selectLike,
  deleteBoardItem,
  addLook,
}) => {
  return (
    <div className="bg-gray-200 min-h-[100vh] font-sans text-blue-700">
      <Header />
      <Body
        getBoardItemList={getBoardItemList}
        setBoardItemContent={setBoardItemContent}
        selectLike={selectLike}
        deleteBoardItem={deleteBoardItem}
        addLook={addLook}
      />
      <footer className="" id="footer"></footer>
    </div>
  );
};

export default Board;
