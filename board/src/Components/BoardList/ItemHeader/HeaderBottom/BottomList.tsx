import OneLineItem from "./OneLineItem";
import TwoLineList from "./TwoLineList";

export interface IBottomItem {
  title: string;
  value: string;
  oneLine?: boolean;
}
export interface IBottomList {
  list: Array<IBottomItem>;
}
export interface IItem {
  title: string;
  value: string;
}

export const BottomList = ({ list }: IBottomList): JSX.Element => {
  const oneLineList: IItem[] = [];
  const twoLineList: IItem[][] = [];
  let twoLineItem = [];
  for (let item of list) {
    if (item.oneLine)
      oneLineList.push({ title: item.title, value: item.value });
    else {
      twoLineItem.push({ title: item.title, value: item.value });
    }
    if (twoLineItem.length == 3) {
      twoLineList.push(twoLineItem);
      twoLineItem = [];
    }
  }
  if (twoLineItem.length != 0) {
    twoLineList.push(twoLineItem);
  }

  return (
    <div className="flex max-sm:flex-col">
      {oneLineList.map((item) => (
        <OneLineItem title={item.title} value={item.value} />
      ))}
      <div className="flex max-sm:flex-col">
        {twoLineList.map((item) => (
          <TwoLineList list={item} />
        ))}
      </div>
    </div>
  );
};

export default BottomList;
