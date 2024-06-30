import { FC, MouseEvent } from "react";
import ItemHeader from "../../../Containers/Board/BoardList/ItemHeader";
import ItemContentBox from "../../../Containers/Board/BoardList/ItemContentBox";
import {
  IBoardItem,
  IBoardItemContentExt,
} from "../../../hooks/Board/BoardList";

export interface IProps {
  boardItem: IBoardItem;
  setBoardItemContent(itemContent: IBoardItemContentExt): void;
  selectLike(like: number): void;
  deleteBoard(): void;
  addLook(): void;
}

const BoardItem: FC<IProps> = ({
  boardItem,
  setBoardItemContent,
  selectLike,
  deleteBoard,
  addLook,
}) => {
  return (
    <li className="bg-blue-300 shadow-sm overflow-y-hidden relative">
      <ItemHeader item={boardItem.getBoardItemHeader()} />
      <ItemContentBox
        boardItemContent={boardItem.getBoardItemContent()}
        setBoardItemContent={setBoardItemContent}
        selectLike={selectLike}
        deleteBoard={deleteBoard}
        addLook={addLook}
      />
    </li>
  );
};

export default BoardItem;
