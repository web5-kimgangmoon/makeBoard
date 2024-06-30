import { FC, useState } from "react";
import BoardComp from "../../Components/Board/Board";
import useBoardList from "../../hooks/BoardList/boardList";
import getBoardItemHeader from "../../getInfo/getBoardItemHeader";

export interface IProps {}

const Board: FC<IProps> = ({}) => {
  const {
    getBoardItemList,
    setBoardItemContent,
    selectLike,
    deleteBoardItem,
    addLook,
  } = {
    ...useBoardList(getBoardItemHeader()),
  };
  return (
    <BoardComp
      getBoardItemList={getBoardItemList}
      setBoardItemContent={setBoardItemContent}
      selectLike={selectLike}
      deleteBoardItem={deleteBoardItem}
      addLook={addLook}
    />
  );
};

export default Board;
