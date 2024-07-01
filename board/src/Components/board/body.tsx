import { FC } from "react";
import BoardList from "../BoardList/BoardList";
import { IBoardItem, IBoardItemContentExt } from "../../hooks/Board/boardList";

export interface IProps {
  getBoardItemList(): IBoardItem[];
  setBoardItemContent(id: number, itemContent: IBoardItemContentExt): void;
  selectLike(id: number, like: number): void;
  deleteBoardItem(id: number): void;
  addLook(id: number): void;
}

const Body: FC<IProps> = ({
  getBoardItemList,
  setBoardItemContent,
  selectLike,
  deleteBoardItem,
  addLook,
}) => {
  return (
    <div className="py-3" id="body">
      <div className="container max-sm:p-0">
        <BoardList
          getBoardItemList={getBoardItemList}
          setBoardItemContent={setBoardItemContent}
          selectLike={selectLike}
          deleteBoardItem={deleteBoardItem}
          addLook={addLook}
        />
      </div>
    </div>
  );
};

export default Body;
