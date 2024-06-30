import { ChangeEvent, MouseEvent } from "react";
import ItemContentWrapperComp from "../../Components/BoardList/ItemContent/ItemContentWrapper";
import useItemContentWrapper from "../../hooks/BoardList/itemContentWrapper";
import { IContent } from "../../Components/BoardList/BoardList";

export interface IProps<T extends { id: number }> {
  headerOneClickEvent?: () => void;
  headerClickEvent?: () => void;
  onMouseBoard?: (e: MouseEvent<HTMLInputElement>) => void;
  content: IContent;
  valueObj: T;
}
// //   checkScroll(): void; 포함되야한다. 추가해주자.
const ItemContentWrapper = <T extends { id: number }>({
  headerOneClickEvent,
  headerClickEvent,
  onMouseBoard,
  content,
  valueObj,
}: IProps<T>) => {
  const {
    // writeBoardItemContent,
    toggleBoardItemContent,
    toggleUnFoldBoardItem,
    getItemContentWrapper,
    checkIsLong,
    setIsAlreadyLook,
  } = useItemContentWrapper();
  const itemContentWrapper = getItemContentWrapper();
  const openItemContent = (e: ChangeEvent<HTMLInputElement>) => {
    if (itemContentWrapper.isUnFold) toggleUnFoldBoardItem();
    if (headerClickEvent) headerClickEvent();
    toggleBoardItemContent();
  };
  const clickOneMove = itemContentWrapper.isAlreadyLook
    ? (e: MouseEvent<HTMLDivElement>) => {
        const height = document.getElementById(
          `${valueObj.id}BoardItemContent`
        )?.offsetHeight;
        if (height !== undefined && height > 300) {
          checkIsLong();
        }
        if (headerOneClickEvent) headerOneClickEvent();
        setIsAlreadyLook();
      }
    : undefined;
  return (
    <ItemContentWrapperComp<T>
      content={content}
      valueObj={valueObj}
      isOpen={itemContentWrapper.isOpen}
      isUnFold={itemContentWrapper.isUnFold}
      isLong={itemContentWrapper.isLong}
      onMouseBoard={onMouseBoard}
      openItemContent={openItemContent}
      unFoldBoardItem={toggleUnFoldBoardItem}
      clickOneMove={clickOneMove}
      selectLike={selectLike}
    />
  );
};

export default ItemContentWrapper;
