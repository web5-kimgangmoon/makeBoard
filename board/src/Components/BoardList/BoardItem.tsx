// import { FC, MouseEvent } from "react";
// import Header from "../../../Containers/Board/BoardList/ItemHeader";
// import ItemContentBox from "../../../Containers/Board/BoardList/ItemContentBox";
// import {
//   IBoardItem,
//   IBoardItemContentExt,
// } from "../../../hooks/Board/boardList";

// export interface IProps {
//   boardItem: IBoardItem;
//   setBoardItemContent(itemContent: IBoardItemContentExt): void;
//   selectLike(like: number): void;
//   deleteBoard(): void;
//   addLook(): void;
// }

// const BoardItem: FC<IProps> = ({
//   boardItem,
//   setBoardItemContent,
//   selectLike,
//   deleteBoard,
//   addLook,
// }) => {
//   return (
//     <li className="bg-blue-300 shadow-sm overflow-y-hidden relative">
//       <Header item={boardItem.getBoardItemHeader()} />
//       <ItemContentBox
//         boardItemContent={boardItem.getBoardItemContent()}
//         setBoardItemContent={setBoardItemContent}
//         selectLike={selectLike}
//         deleteBoard={deleteBoard}
//         addLook={addLook}
//       />
//     </li>
//   );
// };

// export default BoardItem;

import { FC, MouseEvent } from "react";
import Header from "../../Containers/BoardList/ItemHeader";
import ItemContentBox from "../../Containers/BoardList/ItemContentWrapper";
import {
  IBoardItem,
  IBoardItemContentExt,
} from "../../hooks/BoardList/boardList";

export interface IProps<T, S> {
  boardItem: IBoardItem;
  setBoardItemContent(itemContent: T): void;
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
      <Header item={boardItem.getBoardItemHeader()} />
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
