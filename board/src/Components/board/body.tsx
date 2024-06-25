import { FC } from "react";
import BoardList from "./boardList";

export interface IProps {
  test: boolean;
  toggleTest(): void;
}

const Body: FC<IProps> = ({ test, toggleTest }) => {
  return (
    <div className="py-3" id="body">
      <div className="container max-[640px]:p-0 h-[30rem]">
        <BoardList test={test} toggleTest={toggleTest} />
      </div>
    </div>
  );
};

export default Body;
