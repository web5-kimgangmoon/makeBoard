import { MouseEvent, ChangeEvent } from "react";
import BoardListComp from "../../Components/BoardList/BoardList";
import { IProps as IButton } from "../../Components/Button/Button";
import { useBoardListContext } from "../../Context/BoardList/BoardListProvider";

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

export type topTy = Array<
  [{ key: string; title: string }, { key: string; title: string }]
>;
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
  header: IHeader;
  content: IContent;
  valueObjList: IValueObjItem<T, S>[];
  clickBoard?: (id: number, e: ChangeEvent<HTMLInputElement>) => void;
  oneClickBoard?: (id: number, e: MouseEvent<HTMLDivElement>) => void;
  onMouseBoard?: (id: number, e: MouseEvent<HTMLInputElement>) => void;
}
const BoardList = <T extends {}, S extends {}>({
  header,
  content,
  valueObjList,
  clickBoard,
  oneClickBoard,
  onMouseBoard,
}: IProps<T, S>): JSX.Element => {
  const { addIdx, state } = useBoardListContext();
  addIdx(valueObjList.length);
  const titleList: ITitle[] = [];
  const headerTop: [string, string][] = [];
  for (let item of header["top"]) {
    titleList.push({ title: item[0].title, isStretch: false });
    titleList.push({ title: item[1].title, isStretch: true });
    headerTop.push([item[0].key, item[1].key]);
  }
  for (let item of header["bottom"]) {
    titleList.push({ title: item.title, isLong: item.oneLine ? true : false });
  }
  return (
    <BoardListComp<T, S>
      startIdx={state.idx}
      content={content}
      header={{ top: headerTop, bottom: header.bottom }}
      titleList={titleList}
      valueObjList={valueObjList}
      clickBoard={clickBoard}
      oneClickBoard={oneClickBoard}
      onMouseBoard={onMouseBoard}
    />
  );
};

export default BoardList;
