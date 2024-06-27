import { useState, useCallback } from "react";

export interface IBoardItemUserInfo {
  isAlreadyLike: boolean;
  isWriter: boolean;
  isUser: boolean;
}

const useBoardItemUserInfo = (originBoardItemUserInfo: IBoardItemUserInfo) => {
  const [boardItemUserInfo, setBoardItemUserInfo] =
    useState<IBoardItemUserInfo>({
      ...originBoardItemUserInfo,
    });
  // const resetBoardItemUserInfo = useCallback((info: IBoardItemUserInfo) => {
  //   setBoardItemUserInfo(() => {
  //     return { ...info };
  //   });
  // }, []);
  const setIsAlreadyLike = useCallback(() => {
    setBoardItemUserInfo((info) => {
      info.isAlreadyLike = true;
      return { ...info };
    });
  }, []);
  const getBoardItemUserInfo = () => {
    return { ...boardItemUserInfo };
  };
  return { getBoardItemUserInfo, setIsAlreadyLike };
};

export default useBoardItemUserInfo;
