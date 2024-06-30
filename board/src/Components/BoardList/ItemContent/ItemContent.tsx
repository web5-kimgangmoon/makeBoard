import { MouseEvent } from "react";
import TopLineList from "./ButtonLineList/TopLineList";
import BottomLineList from "./ButtonLineList/BottomLineList";
import Content from "./Content/Content";
import TextLineList from "./TextLineList/TextLineList";
import { IProps as IButton } from "../../Button/Button";

export interface IButtonEx extends IButton {
  isExists?: boolean;
  isLink?: boolean;
  to?: string;
}
export type LineItemTy = string | { value: string; title: string }[];
export interface IContent {
  topBtnLineList: Array<IButtonEx[]>;
  textLineList: LineItemTy[];
  content: {
    id: number;
    value: string;
    btnContent: string;
    isUnFold: boolean;
    isLong: boolean;
    clickUnFold(e: MouseEvent<HTMLButtonElement>): void;
  };
  bottomBtnLineList: Array<IButtonEx[]>;
}

export interface IProps {
  id: number;
  content: IContent;
}

const ItemContent = ({ id, content }: IProps): JSX.Element => {
  return (
    <div className="relative z-10" id={`${id}BoardItemContentBox`}>
      <div className="p-2">
        <div className="bg-white text-black shadow-lg rounded-sm">
          <TopLineList BtnLineList={content.topBtnLineList} />
          <TextLineList LineList={content.textLineList} />
          <Content
            isLong={content.content.isLong}
            isUnFold={content.content.isUnFold}
            value={content.content.value}
            id={content.content.id}
            btnContent={content.content.btnContent}
            clickUnFold={content.content.clickUnFold}
          />
          <BottomLineList BtnLineList={content.bottomBtnLineList} />
        </div>
      </div>
    </div>
  );
};

export default ItemContent;
