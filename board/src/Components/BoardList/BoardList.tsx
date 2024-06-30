// import { FC } from "react";
// import BoardItem from "./BoardItem";
// import {
//   IBoardItem,
//   IBoardItemContentExt,
// } from "../../../hooks/Board/boardList";

// export interface IProps {
//   getBoardItemList(): IBoardItem[];
//   setBoardItemContent(id: number, itemContent: IBoardItemContentExt): void;
//   selectLike(id: number, like: number): void;
//   deleteBoardItem(id: number): void;
//   addLook(id: number): void;
// }

// const BoardList: FC<IProps> = ({
//   getBoardItemList,
//   setBoardItemContent,
//   selectLike,
//   deleteBoardItem,
//   addLook,
// }) => {
//   return (
//     <ol className="py-1 bg-blue-400 h-full rounded-sm flex flex-col gap-y-1">
//       <li className="bg-blue-100 shadow-sm overflow-y-hidden">
//         <div className="p-2 flex text-base text-center max-sm:hidden">
//           <div className="flex grow">
//             <div className="p-2 min-w-24 border-r border-gray-400 truncate">
//               작성자
//             </div>
//             <div className="relative grow">
//               <div className="absolute top-0 w-full p-2 text-left border-r border-gray-400">
//                 타이틀
//               </div>
//             </div>
//           </div>
//           <div className="flex">
//             <div className="p-2 min-w-28 border-r border-gray-400">작성일</div>
//             <div className="p-2 min-w-16 border-r border-gray-400">추천수</div>
//             <div className="p-2 min-w-16 border-r border-gray-400">댓글수</div>
//             <div className="p-2 min-w-16">조회수</div>
//           </div>
//         </div>
//       </li>
//       {getBoardItemList().map((item) => (
//         <BoardItem
//           key={item.id}
//           boardItem={item}
//           deleteBoard={() => deleteBoardItem(item.id)}
//           selectLike={(like) => selectLike(item.id, like)}
//           setBoardItemContent={(itemContent: IBoardItemContentExt) =>
//             setBoardItemContent(item.id, itemContent)
//           }
//           addLook={() => addLook(item.id)}
//         />
//       ))}
//     </ol>
//   );
// };

// export default BoardList;
import { FC } from "react";
import BoardItem from "./BoardItem";
import {
  IBoardItem,
  IBoardItemContentExt,
} from "../../hooks/BoardList/boardList";
import SortList from "./SortList/SortList";

export interface IProps {
  getBoardItemList(): IBoardItem[];
  setBoardItemContent(id: number, itemContent: IBoardItemContentExt): void;
  selectLike(id: number, like: number): void;
  deleteBoardItem(id: number): void;
  addLook(id: number): void;
}

// export type IHeaderTopElem = { key: string; title: string };
// export type IHeaderTop = Array<[IHeaderTopElem, IHeaderTopElem]>;
// export type IHeaderBottomElem = {
//   key: string;
//   title: string;
//   oneLine: boolean;
// };
// export type IHeaderBottom = Array<IHeaderBottomElem>;

// export interface IHeader {
//   top: IHeaderTop;
//   bottom: IHeaderBottom;
// }

// export interface IBoard{
// id:number;
//}
//
import { IProps as IButton } from "../../Components/Button/Button";
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
  [{ title: string; key: string }, { title: string; key: string }]
>;
export interface IBottomItem {
  title: string;
  key: string;
  oneLine: boolean;
}
export type bottomListTy = Array<IBottomItem>;
export interface IHeader {
  top: topTy;
  bottom: bottomListTy;
}

export interface IPropss<T, S extends { id: number }> {
  header: IHeader;
  content: IContent;
  valueObjHeaderList: T[];
  valueObjContentList: S[];
}
const BoardList: FC<IProps> = ({
  getBoardItemList,
  setBoardItemContent,
  selectLike,
  deleteBoardItem,
  addLook,
}) => {
  return (
    <ol className="py-1 bg-blue-400 h-full rounded-sm flex flex-col gap-y-1">
      <SortList
        titleList={[
          { title: "작성자" },
          { title: "제목", isStretch: true },
          { title: "작성일", isLong: true },
          { title: "추천수" },
          { title: "댓글수" },
          { title: "조회수" },
        ]}
      />
      {getBoardItemList().map((item) => (
        <BoardItem
          key={item.id}
          boardItem={item}
          deleteBoard={() => deleteBoardItem(item.id)}
          selectLike={(like) => selectLike(item.id, like)}
          setBoardItemContent={(itemContent: IBoardItemContentExt) =>
            setBoardItemContent(item.id, itemContent)
          }
          addLook={() => addLook(item.id)}
        />
      ))}
    </ol>
  );
};

export default BoardList;
