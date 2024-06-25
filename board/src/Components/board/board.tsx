import { FC } from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import Body from "./body";

export interface IProps {
  test: boolean;
  toggleTest(): void;
}

const Board: FC<IProps> = ({ test, toggleTest }) => {
  return (
    <div
      className="bg-gray-200 min-h-[100vh] font-sans text-blue-700 pr-4"
      id="board"
    >
      <Header />
      <Body test={test} toggleTest={toggleTest} />
      <footer className="" id="footer"></footer>
    </div>
  );
};

export default Board;
