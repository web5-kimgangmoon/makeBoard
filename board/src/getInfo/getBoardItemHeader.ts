import { IBoardItemHeader } from "../hooks/BoardList/boardList";

const getBoardItemHeader = (): IBoardItemHeader[] => {
  return [
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
  ];
  // return{
  //   isWriter: false,
  //     isUser: false,
  //     updatedAt: "2024-06-26",
  //     content: "시험중"
  // }
};

export default getBoardItemHeader;
