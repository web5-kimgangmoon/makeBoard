import {
  useReducer,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
} from "react";

interface IState {
  idx: number;
}
type actionTy = { type: "PLUSIDX"; addNum: number };

const initialState: IState = { idx: 0 };

function reducer(state: IState, action: actionTy) {
  switch (action.type) {
    case "PLUSIDX":
      return { ...state, idx: state.idx + action.addNum };
  }
}

interface IBoardListContextProvider {
  state: IState;
  addIdx: (addNum: number) => void;
  dispatch: Dispatch<actionTy>;
}

export const boardListContext = createContext<
  IBoardListContextProvider | undefined
>(undefined);

const BoardListProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addIdx = (addNum: number) => dispatch({ type: "PLUSIDX", addNum });
  return (
    <boardListContext.Provider value={{ state, dispatch, addIdx }}>
      {children}
    </boardListContext.Provider>
  );
};

export const useBoardListContext = () => {
  const context = useContext(boardListContext);
  if (context === undefined) throw new Error("now Loading");
  return context;
};

export default BoardListProvider;
