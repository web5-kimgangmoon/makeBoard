import { ChangeEvent, MouseEvent } from "react";
import ItemContentWrapperComp from "../../Components/BoardList/ItemContent/ItemContentWrapper";
import useItemContentWrapper from "../../hooks/BoardList/itemContentWrapper";
import { IContent } from "../../Components/BoardList/BoardList";

export interface IProps<T extends {}> {
  id: number;
  content: IContent;
  valueObj: T;
  clickBoard?: (e: ChangeEvent<HTMLInputElement>) => void;
  oneClickBoard?: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseBoard?: (e: MouseEvent<HTMLInputElement>) => void;
}
const ItemContentWrapper = <T extends {}>({
  id,
  content,
  valueObj,
  clickBoard = () => {},
  oneClickBoard = () => {},
  onMouseBoard,
}: IProps<T>) => {
  const { openBoard, longBoardCheck, unFoldBoard, state, currentHeight } =
    useItemContentWrapper(id);
  const onClickBoard = (e: ChangeEvent<HTMLInputElement>) => {
    clickBoard(e);
    openBoard();
  };
  const onClickOnceBoard = !state.isLooked
    ? (e: MouseEvent<HTMLDivElement>) => {
        oneClickBoard(e);
        longBoardCheck();
      }
    : undefined;
  const onClickUnFoldButton = (e: MouseEvent<HTMLButtonElement>) => {
    unFoldBoard();
  };
  return (
    <ItemContentWrapperComp<T>
      id={id}
      valueObj={valueObj}
      content={content}
      isOpen={state.isOpen}
      isUnFold={state.isUnFold}
      isLong={state.isLong}
      currentHeight={currentHeight()}
      onClickBoard={onClickBoard}
      onClickOnceBoard={onClickOnceBoard}
      onClickUnFoldButton={onClickUnFoldButton}
      onMouseBoard={onMouseBoard}
    />
  );
};

export default ItemContentWrapper;
