import { useState, useCallback } from "react";
import { IBoardItemContentExt } from "./boardList";

export interface IBoardItemContentWrapper {
  isOpen: boolean;
  // isWritten: boolean;
  isUnFold: boolean; // 전체보기가 켜있으면 // 게시글 내용 전체보기
  isLong: boolean;
  isAlreadyLook: boolean;
  boxHeight: string;
}

const useItemContentWrapper = () => {
  const [itemContentWrapper, setItemContentWrapper] =
    useState<IBoardItemContentWrapper>({
      isLong: false,
      isOpen: false,
      // isWritten: false,
      isUnFold: false,
      isAlreadyLook: false,
      boxHeight: "0",
    });
  // const writeBoardItemContent = useCallback(() => {
  //   setItemContentWrapper((wrapper) => {
  //     wrapper.isWritten = true;
  //     return { ...wrapper };
  //   });
  // }, []);
  const toggleBoardItemContent = useCallback(() => {
    setItemContentWrapper((wrapper) => {
      wrapper.isOpen = !wrapper.isOpen;
      return { ...wrapper };
    });
  }, []);
  const toggleUnFoldBoardItem = useCallback(() => {
    setItemContentWrapper((wrapper) => {
      wrapper.isUnFold = !wrapper.isUnFold;
      return { ...wrapper };
    });
  }, []);
  const checkIsLong = useCallback(() => {
    setItemContentWrapper((wrapper) => {
      wrapper.isLong = true;
      return { ...wrapper };
    });
  }, []);
  const setIsAlreadyLook = useCallback(() => {
    setItemContentWrapper((wrapper) => {
      wrapper.isAlreadyLook = true;
      return { ...wrapper };
    });
  }, []);
  const setBoxHeight = useCallback((height: string) => {
    setItemContentWrapper((wrapper) => {
      wrapper.boxHeight = height;
      return { ...wrapper };
    });
  }, []);
  const getItemContentWrapper = () => {
    return { ...itemContentWrapper };
  };

  return {
    // writeBoardItemContent,
    toggleBoardItemContent,
    toggleUnFoldBoardItem,
    setBoxHeight,
    getItemContentWrapper,
    checkIsLong,
    setIsAlreadyLook,
  };
};

export default useItemContentWrapper;
