import { IItem } from "./BottomList";

interface IProps extends IItem {}

const OneLineItem = ({ title, value }: IProps): JSX.Element => {
  return (
    <div className="p-2 min-w-28 border-r border-gray-400 truncate max-sm:grow max-sm:border-r-0 font-semibold">
      <span className="hidden font-normal max-sm:inline">{title + " "}</span>
      {value}
    </div>
  );
};

export default OneLineItem;
