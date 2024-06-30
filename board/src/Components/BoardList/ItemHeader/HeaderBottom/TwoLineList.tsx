import TwoLineItem from "./TwoLineItem";
import { IItem } from "./BottomList";

interface IProps {
  list: IItem[];
}
const TwoLineList = ({ list }: IProps): JSX.Element => (
  <div className="flex border-gray-300 border-r border-gray-400 w-full max-sm:border-y max-sm:first:border-b-0 max-sm:border-r-0 last:border-r-0">
    {list.map((item) => (
      <TwoLineItem title={item.title} value={item.value} />
    ))}
  </div>
);

export default TwoLineList;
