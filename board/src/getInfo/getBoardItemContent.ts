import { IBoardItemContentExt } from "../hooks/board/boardList";

const getBoardItemContent = (): IBoardItemContentExt => {
  return {
    isWriter: false,
    isUser: false,
    updatedAt: "2024-06-26",
    content: "시험중입니다.",
  };
};

export default getBoardItemContent;
