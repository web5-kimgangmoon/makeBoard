import { IBoardItemUserInfo } from "../hooks/BoardList/boardItemUserInfo";

const getBoardItemUserInfo = (): IBoardItemUserInfo => {
  return {
    isAlreadyLike: false,
    isWriter: true,
    isUser: true,
  };
};

export default getBoardItemUserInfo;
