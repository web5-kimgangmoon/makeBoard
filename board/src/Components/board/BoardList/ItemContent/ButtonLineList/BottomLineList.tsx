import { IProps as IButton } from "../../../../Button/Button";

interface IButtonEx extends IButton {
  isNotExist: boolean;
}

interface IProps {
  BtnLineList: Array<IButtonEx[]>;
}

<div className="p-1 bg-blue-100 flex justify-center gap-y-2 flex-col"></div>;
