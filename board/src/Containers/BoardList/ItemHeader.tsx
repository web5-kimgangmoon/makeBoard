import ItemHeaderComp from "../../Components/BoardList/ItemHeader/ItemHeader";
import { IHeader } from "../../Components/BoardList/BoardList";

export interface IProps<T> {
  header: IHeader;
  valueObj: T;
}

const ItemHeader = <T extends {}>({
  header,
  valueObj,
}: IProps<T>): JSX.Element => {
  const topInfo: Array<[string, string]> = [];
  const bottomInfo: { title: string; value: string; oneLine?: boolean }[] = [];
  for (let item of header.top) {
    topInfo.push([
      `${valueObj[item[0] as keyof T]}`,
      `${valueObj[item[1] as keyof T]}`,
    ]);
  }
  for (let item of header.bottom) {
    bottomInfo.push({
      title: item.title,
      oneLine: item.oneLine,
      value: `${valueObj[item.key as keyof T]}`,
    });
  }
  return <ItemHeaderComp top={{ ...topInfo }} bottom={{ ...bottomInfo }} />;
};

export default ItemHeader;
