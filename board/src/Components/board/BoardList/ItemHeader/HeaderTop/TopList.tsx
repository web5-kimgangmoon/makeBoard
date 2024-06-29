import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";

export type topListTy = Array<[string, string]>;
export interface IProps {
  list: topListTy;
}
export interface IItem {
  value: string;
}

const TopList = ({ list }: IProps): JSX.Element => {
  return (
    <div className="flex grow">
      {list.map((item) => (
        <div className="flex grow max-sm:gap-x-2">
          <LeftDiv value={item[0]} />
          <RightDiv value={item[1]} />
        </div>
      ))}
    </div>
  );
};

export default TopList;
