import { useState } from "react";
import BoardItemCls, {
  BoardItemContentCls,
  BoardItemHeaderCls,
} from "../../lib/boardItem";

const useBoard = () => {
  const temp = {
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
  };
  const boardItemContent = new BoardItemContentCls({ ...temp });
  const boardItemHeader = new BoardItemHeaderCls({ ...temp });
  const [state, setState] = useState<{
    content: BoardItemContentCls;
    header: BoardItemHeaderCls;
  }>({
    header: boardItemHeader,
    content: boardItemContent,
  });
  return { state };
};
