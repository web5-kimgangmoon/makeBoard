import { IItem } from "./TopList";

interface IProps extends IItem {}

const LeftDiv = <T extends {}>({ value }: IProps): JSX.Element => {
  return (
    <div className="p-2 min-w-24 border-r border-gray-400 truncate max-sm:border-r-0 max-sm:bg-blue-200 max-sm:rounded-xl max-sm:shadow">
      {value}
    </div>
  );
};

export default LeftDiv;
