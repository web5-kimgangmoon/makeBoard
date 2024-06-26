import { useState, useCallback } from "react";

export interface IBoardItemBase {
  id: number;
  title: string;
  writer: string;
  createdAt: string;
  likes: number;
  unlikes: number;
  looks: number;
}

export interface IBoardItemHeaderExt {
  commentCnt: number;
}

export interface IBoardItemContentExt {
  isWriter: boolean;
  isUser: boolean;
  // isUser은 userInfo 쪽에서 관리하는게 맞을 것 같습니다. 나중에 빼냅시다.
  updatedAt: string;
  content: string;
  // isAlreadyLike 추천 비추천 구분하지 않고 넣어주자. 서버에서 구분보단 그냥 정보를 받아오자.
}
export interface IBoardItemContentBoxExt {
  isOpen: boolean;
  isWritten: boolean;
}

export interface IBoardItemHeader extends IBoardItemBase {}
export interface IBoardItemHeader extends IBoardItemHeaderExt {}

export interface IBoardItemContent extends IBoardItemBase {}
export interface IBoardItemContent extends IBoardItemContentExt {}
export interface IBoardItemContent extends IBoardItemContentBoxExt {}

export interface IBoardItem extends IBoardItemHeader {}
export interface IBoardItem extends IBoardItemContent {}
export interface IBoardItem {
  getBoardItemHeader(): IBoardItemHeader;
  getBoardItemContent(): IBoardItemContent;
}

const useBoardList = (boardItemHeaderList: IBoardItemHeader[]) => {
  const [boardList, setBoardList] = useState<IBoardItem[]>(
    boardItemHeaderList.map((item) => ({
      ...item,
      isWriter: false,
      isUser: false,
      isOpen: false,
      updatedAt: "",
      content: "",
      isWritten: false,
      getBoardItemHeader: function () {
        return { ...this };
      },
      getBoardItemContent: function () {
        return { ...this };
      },
    }))
  );
  const getBoardItemList = (): IBoardItem[] => {
    return [...boardList];
  };
  const setBoardItemContent = useCallback(
    (id: number, itemContent: IBoardItemContentExt) => {
      setBoardList((list) => {
        let idx = list.findIndex((item) => item.id === id);
        if (idx !== -1)
          list[idx] = { ...list[idx], ...itemContent, isWritten: true };
        return [...list];
      });
    },
    []
  );
  const toggleBoardItemContent = useCallback((id: number) => {
    setBoardList((list) => {
      let idx = list.findIndex((item) => item.id === id);
      if (idx !== -1) list[idx].isOpen = !list[idx].isOpen;
      return [...list];
    });
  }, []);
  const deleteBoardItem = useCallback((id: number) => {
    setBoardList((list) => {
      list = list.filter((item) => item.id !== id);
      return [...list];
    });
  }, []);
  return {
    getBoardItemList,
    setBoardItemContent,
    toggleBoardItemContent,
    deleteBoardItem,
  };
};

export default useBoardList;