import { useState, useCallback } from "react";
import { IBoardItemContentExt } from "./BoardList";

export interface IBoardItemContentBox {
  isOpen: boolean;
  isWritten: boolean;
  isUnFold: boolean; // 전체보기가 켜있으면 // 게시글 내용 전체보기
  isLong: boolean;
  isAlreadyLook: boolean;
  boxHeight: string;
}

const useItemContentBox = () => {
  const [itemContentBox, setItemContentBox] = useState<IBoardItemContentBox>({
    isLong: false,
    isOpen: false,
    isWritten: false,
    isUnFold: false,
    isAlreadyLook: false,
    boxHeight: "0",
  });
  const writeBoardItemContent = useCallback(() => {
    setItemContentBox((box) => {
      box.isWritten = true;
      return { ...box };
    });
  }, []);
  const toggleBoardItemContent = useCallback(() => {
    setItemContentBox((box) => {
      box.isOpen = !box.isOpen;
      return { ...box };
    });
  }, []);
  const toggleUnFoldBoardItem = useCallback(() => {
    setItemContentBox((box) => {
      box.isUnFold = !box.isUnFold;
      return { ...box };
    });
  }, []);
  const checkIsLong = () => {
    setItemContentBox((box) => {
      box.isLong = true;
      return { ...box };
    });
  };
  const setIsAlreadyLook = () => {
    setItemContentBox((box) => {
      box.isAlreadyLook = true;
      return { ...box };
    });
  };
  const getItemContentBox = () => {
    return { ...itemContentBox };
  };
  const setHeight = useCallback((height: number) => {
    setItemContentBox((box) => {
      box.boxHeight = height.toString();
      return { ...box };
    });
  }, []);
  return {
    writeBoardItemContent,
    toggleBoardItemContent,
    toggleUnFoldBoardItem,
    getItemContentBox,
    checkIsLong,
    setIsAlreadyLook,
    setHeight,
  };
};

export default useItemContentBox;
