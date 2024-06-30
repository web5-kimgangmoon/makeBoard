import { useState, useCallback } from "react";

export interface IModalInfo {}

// 테스트함수입니다. 나중에 수정해줍시다.
const useModalInfo = () => {
  const [modalInfo, setModalInfo] = useState<IModalInfo>({});
  const openCommentListeModal = () => {
    console.log("openCommentListModal 실행중입니다.");
  };
  const openCommentWriteModal = () => {
    console.log("openCommentWriteModal 실행중입니다.");
  };
  return { openCommentListeModal, openCommentWriteModal };
};

export default useModalInfo;
