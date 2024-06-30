import { IBoardItemUserInfo } from "../hooks/Board/BoardItemUserInfo";

const getBoardItemUserInfo = (): IBoardItemUserInfo => {
  return {
    isAlreadyLike: false,
    isWriter: true,
    isUser: true,
  };
};

export default getBoardItemUserInfo;
