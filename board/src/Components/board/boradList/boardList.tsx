import { FC } from "react";
import BoardItem from "./boardItem";

export interface IProps {
  test: boolean;
  toggleTest(): void;
}

const BoardList: FC<IProps> = ({ test, toggleTest }) => {
  return (
    <ol className="py-1 bg-blue-400 h-full rounded-sm flex flex-col gap-y-1">
      <li className="bg-blue-100 shadow-sm overflow-y-hidden">
        <div className="p-2 flex text-base text-center max-sm:hidden">
          <div className="flex grow">
            <div className="p-2 min-w-24 border-r border-gray-400 truncate">
              작성자
            </div>
            <div className="relative grow">
              <div className="absolute top-0 w-full p-2 text-left border-r border-gray-400">
                타이틀
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="p-2 min-w-28 border-r border-gray-400">작성일</div>
            <div className="p-2 min-w-16 border-r border-gray-400">추천수</div>
            <div className="p-2 min-w-16 border-r border-gray-400">댓글수</div>
            <div className="p-2 min-w-16">조회수</div>
          </div>
        </div>
      </li>
      <BoardItem test={test} toggleTest={toggleTest} />
      <BoardItem test={test} toggleTest={toggleTest} />
    </ol>
  );
};

export default BoardList;
