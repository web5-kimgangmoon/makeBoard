import { IProps as IButton } from "../../../Button/Button";
import TopLineItem from "./TopLineItem";

export interface IButtonEx extends IButton {
  isExists?: boolean;
  isLink?: boolean;
  to?: string;
}

export interface IProps {
  BtnLineList: Array<IButtonEx[]>;
}

const TopLineList = ({ BtnLineList }: IProps): JSX.Element => {
  return (
    <div className="border-double border-gray-300 border-b-4 flex-col bg-blue-100">
      {BtnLineList.map((item) => (
        <TopLineItem BtnList={item} />
      ))}
    </div>
  );
};

export default TopLineList;
