import { useState, useCallback } from "react";

export interface IUserInfo {}

const useUserInfo = (idx: number) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const recommend = (idx: number, like: number, isAlreadyLike: boolean) => {
    // boardList쪽에 isAlreadyLike가 있습니다.
    // 테스트 함수입니다.
    console.log(like + "useRecommend 작동중");
  };
  return;
};

export default useUserInfo;
