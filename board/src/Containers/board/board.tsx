import { FC, useState } from "react";
import BoardComp from "../../Components/board/board";

export interface IProps {}
interface IState {
  test: boolean;
}

const Board: FC<IProps> = ({}) => {
  const [state, setState] = useState<IState>({ test: true });
  const toggleTest = () => {
    setState((state) => {
      state.test = !state.test;
      return { ...state };
    });
  };
  return <BoardComp test={state.test} toggleTest={toggleTest} />;
};

export default Board;
