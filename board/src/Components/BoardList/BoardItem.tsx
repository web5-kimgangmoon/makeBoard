import { MouseEvent, ChangeEvent } from "react";
import Header from "../../Containers/BoardList/ItemHeader";
import ItemContentBox from "../../Containers/BoardList/ItemContentWrapper";
import { IContent, IHeader } from "./BoardList";

export interface IProps<T, S> {
  header: IHeader;
  headerValueObj: T;
  id: number;
  content: IContent;
  contentValueObj: S;
  clickBoard?: (e: ChangeEvent<HTMLInputElement>) => void;
  oneClickBoard?: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseBoard?: (e: MouseEvent<HTMLInputElement>) => void;
}

const BoardItem = <T extends {}, S extends {}>({
  header,
  headerValueObj,
  id,
  content,
  contentValueObj,
  clickBoard,
  oneClickBoard,
  onMouseBoard,
}: IProps<T, S>) => {
  return (
    <li className="bg-blue-300 shadow-sm overflow-y-hidden relative">
      <Header<T> header={header} valueObj={headerValueObj} />
      <ItemContentBox<S>
        id={id}
        content={content}
        valueObj={contentValueObj}
        clickBoard={clickBoard}
        oneClickBoard={oneClickBoard}
        onMouseBoard={onMouseBoard}
      />
    </li>
  );
};

export default BoardItem;
