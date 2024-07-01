import { MouseEvent, ChangeEvent } from "react";
import { IProps as IButton } from "../../Components/Button/Button";
import BoardItem from "./BoardItem";
import SortList from "./SortList/SortList";

export interface IButtonEx extends IButton {
  isExists?: boolean;
  isLink?: boolean;
  to?: string;
}
export type LineItemTy = string | { key: string; title: string }[];
export interface IContent {
  topBtnLineList: Array<IButtonEx[]>;
  textLineList: LineItemTy[];
  content: { key: string; btnContent: string };
  bottomBtnLineList: Array<IButtonEx[]>;
}

export type topTy = Array<[string, string]>;
export interface IBottomItem {
  title: string;
  key: string;
  oneLine?: boolean;
}
export interface IHeader {
  top: topTy;
  bottom: Array<IBottomItem>;
}

export interface ITitle {
  title: string;
  isLong?: boolean;
  isStretch?: boolean;
}
export interface IValueObjItem<T extends {}, S extends {}> {
  valueObjHeaderList: T;
  valueObjContentList: S;
}
export interface IProps<T extends {}, S extends {}> {
  startIdx: number;
  header: IHeader;
  content: IContent;
  titleList: ITitle[];
  valueObjList: IValueObjItem<T, S>[];
  clickBoard?: (id: number, e: ChangeEvent<HTMLInputElement>) => void;
  oneClickBoard?: (id: number, e: MouseEvent<HTMLDivElement>) => void;
  onMouseBoard?: (id: number, e: MouseEvent<HTMLInputElement>) => void;
}
const BoardList = <T extends {}, S extends {}>({
  startIdx,
  header,
  content,
  titleList,
  valueObjList,
  clickBoard,
  oneClickBoard,
  onMouseBoard,
}: IProps<T, S>): JSX.Element => {
  return (
    <ol className="py-1 bg-blue-400 h-full rounded-sm flex flex-col gap-y-1">
      <SortList titleList={titleList} />
      {valueObjList.map((item, idx) => (
        <BoardItem<T, S>
          key={idx + startIdx}
          id={idx}
          header={header}
          headerValueObj={item.valueObjHeaderList}
          content={content}
          contentValueObj={item.valueObjContentList}
          clickBoard={
            clickBoard ? (e) => clickBoard(idx + startIdx, e) : clickBoard
          }
          oneClickBoard={
            oneClickBoard
              ? (e) => oneClickBoard(idx + startIdx, e)
              : oneClickBoard
          }
          onMouseBoard={
            onMouseBoard ? (e) => onMouseBoard(idx + startIdx, e) : onMouseBoard
          }
        />
      ))}
    </ol>
  );
};

export default BoardList;
