import { FC, MouseEvent } from "react";

export interface IProps {
  test: boolean;
  toggleTest(): void;
}

const BoardItem: FC = ({ test, toggleTest }) => {
  return (
    <li className="bg-blue-300 shadow-sm overflow-y-hidden">
      <div className="p-2 flex text-base text-center cursor-pointer relative">
        <div className="p-2 w-24 border-r border-gray-400 truncate">떡밥잎</div>
        <div className="relative grow">
          <div className="absolute top-0 w-full p-2 text-left border-r border-gray-400 truncate">
            새로운 유머가 떠올랐다
          </div>
        </div>
        <div className="p-2 w-28 border-r border-gray-400 truncate">
          2024-06-25
        </div>
        <div className="p-2 w-16 border-r border-gray-400 font-semibold truncate">
          0
        </div>
        <div className="p-2 w-16 border-r border-gray-400 font-semibold truncate">
          0
        </div>
        <div className="p-2 w-16 font-semibold">0</div>
      </div>
      <div className="boardDrop">
        <div className="bg-blue-600">ss</div>
      </div>
    </li>
  );
};

export default BoardItem;
