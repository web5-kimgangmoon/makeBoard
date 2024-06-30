import { MouseEvent } from "react";
import { IProps as IButton } from "../../Components/Button/Button";
import ItemContentComp from "../../Components/BoardList/ItemContent/ItemContent";
import { IContent } from "../../Components/BoardList/BoardList";

export interface IProps<T extends { id: number }> {
  content: IContent;
  isUnFold: boolean;
  isLong: boolean;
  unFoldBoardItem(): void;
  valueObj: T;
}

const ItemContent = <T extends { id: number }>({
  content,
  isUnFold,
  isLong,
  unFoldBoardItem,
  valueObj,
}: IProps<T>): JSX.Element => {
  const clickUnfold = (e: MouseEvent<HTMLButtonElement>) => {
    unFoldBoardItem();
  };
  const contentInfo = {
    isLong: isLong,
    isUnFold: isUnFold,
    value: `${valueObj[content.content.key as keyof T]}`,
    id: valueObj.id,
    btnContent: content.content.btnContent,
    clickUnFold: clickUnfold,
  };
  const textLineListInfo = [];
  for (let item of content.textLineList) {
    let temp: { value: string; title: string }[] = [];
    if (Array.isArray(item)) {
      item.forEach((item) => {
        temp.push({
          value: `${valueObj[item.key as keyof T]}`,
          title: item.title,
        });
      });
      textLineListInfo.push(temp);
    } else {
      textLineListInfo.push(`${valueObj[item as keyof T]}`);
    }
  }
  return (
    <ItemContentComp
      content={{
        ...content,
        content: contentInfo,
        textLineList: textLineListInfo,
      }}
      id={valueObj.id}
    />
  );
};

export default ItemContent;
