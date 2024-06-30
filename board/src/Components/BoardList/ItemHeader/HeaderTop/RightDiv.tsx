import { IItem } from "./TopList";

interface IProps extends IItem {}

const RightDiv = <T extends {}>({ value }: IProps): JSX.Element => {
  return (
    <div className="relative grow">
      <div className="absolute top-0 w-full h-full p-2 text-left border-r border-gray-400 truncate max-sm:border-0 max-sm:text-center max-sm:bg-gray-300 max-sm:shadow">
        {value}
      </div>
    </div>
  );
};

export default RightDiv;
