import { useCallback, useReducer } from "react";

export type actionTy =
  | { type: "TOGGLEBOARD" }
  | { type: "TOGGLEFOLD" }
  | { type: "SETISLONG" }
  | { type: "SETISLOOKED" }
  | { type: "SETBOXHEIGHT"; height: string };
// | { type: "SETCURRENTHEIGHT"; height: string };
export interface IState {
  // id: number;
  isOpen: boolean;
  isUnFold: boolean; // 전체보기가 켜있으면 // 게시글 내용 전체보기
  isLong: boolean;
  isLooked: boolean;
  boxHeight: string;
  // currentHeight: string;
}

function reducer(state: IState, action: actionTy) {
  switch (action.type) {
    case "TOGGLEBOARD":
      return { ...state, isOpen: !state.isOpen };
    case "TOGGLEFOLD":
      return { ...state, isUnFold: !state.isUnFold };
    case "SETISLONG":
      return { ...state, isLong: true };
    case "SETISLOOKED":
      return { ...state, isLooked: true };
    case "SETBOXHEIGHT":
      return { ...state, boxHeight: action.height };
    // case "SETCURRENTHEIGHT":
    //   return { ...state, currentHeight: action.height };
  }
}

const initialState: IState = {
  // id: 0,
  isOpen: false,
  isUnFold: false,
  isLong: false,
  isLooked: false,
  boxHeight: "0px",
  // currentHeight: "0px",
};

const useItemContentWrapper = (id: number) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });
  const openBoard = useCallback(() => {
    if (!state.isUnFold) dispatch({ type: "TOGGLEFOLD" });
    dispatch({ type: "TOGGLEBOARD" });
  }, []);
  const longBoardCheck = useCallback(() => {
    const contentHeight = document.getElementById(
      `${id}BoardItemContent`
    )?.offsetHeight;
    const boxHeight = document.getElementById(
      `${id}BoardItemContentBox`
    )?.offsetHeight;
    if (contentHeight !== undefined && contentHeight > 300) {
      dispatch({
        type: "SETBOXHEIGHT",
        height: `${boxHeight ? boxHeight : 0}px`,
      });
    }
    dispatch({ type: "SETISLOOKED" });
  }, []);
  const unFoldBoard = useCallback(() => {
    dispatch({ type: "TOGGLEFOLD" });
    //   dispatch({ type: "SETCURRENTHEIGHT", height: "max-content" });
  }, []);
  const currentHeight = () =>
    state.isUnFold ? "max-content" : state.isOpen ? state.boxHeight : "0";
  return {
    state,
    currentHeight,
    dispatch,
    openBoard,
    longBoardCheck,
    unFoldBoard,
  };
};

export default useItemContentWrapper;
