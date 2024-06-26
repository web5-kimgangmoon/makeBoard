import { FC, useState } from "react";
import BoardComp from "../../Components/board/board";
import BoardItemCls from "../../lib/boardItem";

export interface IProps {}
interface IState {
  boardList: BoardItemCls[];
}

const Board: FC<IProps> = ({}) => {
  const [state, setState] = useState<IState>({
    boardList: [
      new BoardItemCls({
        id: 1,
        title: "본인 방금 상상함",
        writer: "망상",
        createdAt: "2024-06-25",
        likes: 0,
        unlikes: 0,
        looks: 0,
        commentCnt: 0,
        isWriter: false,
        isUser: true,
        updatedAt: "2024-06-27",
        content: "",
      }),
    ],
  });
  return <BoardComp test={state.test} toggleTest={toggleTest} />;
};

export default Board;
