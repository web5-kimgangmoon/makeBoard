import BottomList from "./HeaderBottom/BottomList";
import TopList from "./HeaderTop/TopList";

export type topTy = Array<[string, string]>;
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
export interface IProps<T> {
  header: IHeader;
  valueObj: T;
}

const Header = <T extends {}>({ header, valueObj }: IProps<T>): JSX.Element => {
  const topInfo: Array<[string, string]> = [];
  const bottomInfo: { title: string; value: string; oneLine: boolean }[] = [];
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
  return (
    <div className="p-2 flex text-base text-center gap-y-2 max-sm:flex-col">
      <TopList list={topInfo} />
      <BottomList list={bottomInfo} />
    </div>
  );
};

export default Header;
