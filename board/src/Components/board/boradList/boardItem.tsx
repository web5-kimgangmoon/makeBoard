import { FC, MouseEvent } from "react";
import ItemHeader from "./itemHeader";
import ItemContentBox from "./itemContentBox";

export interface IProps {
  test: boolean;
  toggleTest(): void;
}

const BoardItem: FC<IProps> = ({ test, toggleTest }) => {
  return (
    <li className="bg-blue-300 shadow-sm overflow-y-hidden relative">
      <ItemHeader />
      <ItemContentBox />
    </li>
  );
};

export default BoardItem;
