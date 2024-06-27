import { FC, useState } from "react";
import BoardComp from "../../Components/board/board";
import useBoardList from "../../hooks/board/boardList";

export interface IProps {}
interface IState {}

const Board: FC<IProps> = ({}) => {
  const {
    getBoardItemList,
    setBoardItemContent,
    toggleBoardItemContent,
    unFoldBoardItem,
  } = {
    ...useBoardList([
      {
        id: 0,
        title: "과연?",
        writer: "작성자",
        createdAt: "2024-06-26",
        likes: 0,
        unlikes: 0,
        looks: 0,
        commentCnt: 0,
      },
      {
        id: 1,
        title: "과연?",
        writer: "작성자",
        createdAt: "2024-06-26",
        likes: 0,
        unlikes: 0,
        looks: 0,
        commentCnt: 0,
      },
      {
        id: 2,
        title: "과연?",
        writer: "작성자",
        createdAt: "2024-06-26",
        likes: 0,
        unlikes: 0,
        looks: 0,
        commentCnt: 0,
      },
    ]),
  };
  return (
    <BoardComp
      getBoardItemList={getBoardItemList}
      setBoardItemContent={setBoardItemContent}
      toggleBoardItemContent={toggleBoardItemContent}
      unFoldBoardItem={unFoldBoardItem}
    />
  );
};

export default Board;
