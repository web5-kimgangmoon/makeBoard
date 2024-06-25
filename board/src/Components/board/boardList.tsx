import { FC } from "react";
import BoardItem from "./boardItem";

export interface IProps {
  test: boolean;
  toggleTest(): void;
}

const BoardList: FC<IProps> = ({ test, toggleTest }) => {
  return (
    <ol className="py-1 bg-blue-400 h-full rounded-sm flex flex-col gap-y-1">
      <li className="bg-blue-100 shadow-sm">
        <div className="p-2 flex text-center text-black">
          <div className="p-2 w-24 border-r border-gray-400">작성자</div>
          <div className="relative grow">
            <div className="absolute top-0 w-full p-2 border-r border-gray-400 truncate">
              타이틀
            </div>
          </div>
          <div className="p-2 w-28 border-r border-gray-400">작성일</div>
          <div className="p-2 w-16 border-r border-gray-400">추천</div>
          <div className="p-2 w-16 border-r border-gray-400">댓글</div>
          <div className="p-2 w-16">조회</div>
        </div>
        <div></div>
      </li>
      <BoardItem test={test} toggleTest={toggleTest} />
      <BoardItem test={test} toggleTest={toggleTest} />
    </ol>
  );
};

export default BoardList;
