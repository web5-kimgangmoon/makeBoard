import { IProps as IButton } from "../../../Button/Button";
import BottomLineItem from "./BottomLineItem";

export interface IButtonEx extends IButton {
  isExists?: boolean;
  isLink?: boolean;
  to?: string;
}

export interface IProps {
  BtnLineList: Array<IButtonEx[]>;
}

const BottomLineList = ({ BtnLineList }: IProps): JSX.Element => {
  return (
    <div className="p-1 bg-blue-100 flex justify-center gap-y-2 flex-col">
      {BtnLineList.map((item) => (
        <BottomLineItem BtnList={item} />
      ))}
    </div>
  );
};

export default BottomLineList;
