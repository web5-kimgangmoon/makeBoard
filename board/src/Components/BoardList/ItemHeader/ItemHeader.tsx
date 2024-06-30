import BottomList from "./HeaderBottom/BottomList";
import TopList from "./HeaderTop/TopList";

export type topTy = Array<[string, string]>;
export interface IBottomItem {
  title: string;
  value: string;
  oneLine: boolean;
}
export type bottomListTy = Array<IBottomItem>;
export interface IProps {
  top: topTy;
  bottom: bottomListTy;
}

const ItemHeader = ({ top, bottom }: IProps): JSX.Element => {
  return (
    <div className="p-2 flex text-base text-center gap-y-2 max-sm:flex-col">
      <TopList list={top} />
      <BottomList list={bottom} />
    </div>
  );
};

export default ItemHeader;
