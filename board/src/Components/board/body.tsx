import { FC } from "react";
import BoardList from "./boradList/boardList";

export interface IProps {
  test: boolean;
  toggleTest(): void;
}

const Body: FC<IProps> = ({ test, toggleTest }) => {
  return (
    <div className="py-3" id="body">
      <div className="container max-sm:p-0 min-w-[450px]">
        <BoardList test={test} toggleTest={toggleTest} />
      </div>
    </div>
  );
};

export default Body;
