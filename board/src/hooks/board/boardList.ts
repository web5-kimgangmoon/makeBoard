import { useState, useEffect, useCallback } from "react";

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
  updatedAt: string;
  content: string;
}

export interface IBoardItemHeader extends IBoardItemBase {}
export interface IBoardItemHeader extends IBoardItemHeaderExt {}

export interface IBoardItemContent extends IBoardItemBase {}
export interface IBoardItemContent extends IBoardItemContentExt {}

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
      updatedAt: "",
      content: "",
      // isAlreadyLike: false,
      getBoardItemHeader: function () {
        return { ...this };
      },
      getBoardItemContent: function () {
        return { ...this };
      },
    }))
  );
  const setBoardItemContent = useCallback(
    (id: number, itemContent: IBoardItemContentExt) => {
      setBoardList((list: IBoardItem[]) => {
        let idx = list.findIndex((item) => item.id === id);
        if (idx !== -1) list[idx] = { ...list[idx], ...itemContent };
        return [...list];
      });
    },
    []
  );
  const getBoardItemList = (): IBoardItem[] => {
    return [...boardList];
  };
  const deleteBoardItem = useCallback((id: number) => {
    setBoardList((list) => {
      list = list.filter((item) => item.id !== id);
      return [...list];
    });
  }, []);
  const selectLike = useCallback((id: number, like: number) => {
    setBoardList((list) => {
      let idx = list.findIndex((item) => item.id === id);
      if (idx !== -1) like == 1 ? list[idx].likes++ : list[idx].unlikes++;
      return [...list];
    });
  }, []);
  const addLook = useCallback((id: number) => {
    setBoardList((list) => {
      let idx = list.findIndex((item) => item.id === id);
      if (idx !== -1) list[idx].looks++;
      return [...list];
    });
  }, []);
  return {
    getBoardItemList,
    deleteBoardItem,
    setBoardItemContent,
    selectLike,
    addLook,
  };
};

export default useBoardList;
