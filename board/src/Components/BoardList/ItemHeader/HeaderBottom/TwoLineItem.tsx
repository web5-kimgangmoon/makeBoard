import { IItem } from "./BottomList";

interface IProps extends IItem {}

const TwoLineItem = ({ title, value }: IProps): JSX.Element => (
  <div className="flex px-2 py-2 min-w-16 border-r border-gray-400 max-sm:grow max-sm:border-r-0 max-sm:flex-col gap-y-1 justify-center last:border-r-0">
    <div className="hidden font-normal max-sm:block">{title}</div>
    <div className="font-semibold">{value}</div>
  </div>
);

export default TwoLineItem;
