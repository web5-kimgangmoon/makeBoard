import { IProps as IButton } from "../../../../Button/Button";

interface IButtonEx extends IButton {
  isNotExist: boolean;
}

interface IProps {
  BtnLineList: Array<IButtonEx[]>;
}

<div className="border-double border-gray-300 border-b-4 flex-col"></div>;
