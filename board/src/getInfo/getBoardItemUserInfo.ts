import { IBoardItemUserInfo } from "../hooks/Board/boardItemUserInfo";

const getBoardItemUserInfo = (): IBoardItemUserInfo => {
  return {
    isAlreadyLike: false,
    isWriter: true,
    isUser: true,
  };
};

export default getBoardItemUserInfo;
