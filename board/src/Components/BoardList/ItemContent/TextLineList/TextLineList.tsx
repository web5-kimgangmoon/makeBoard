import OnlyValueLineItem from "./OnlyValueLineItem";
import TitleValueLineList from "./TitleValueLineList";

export interface ITitleValueLineList {
  value: string;
  title: string;
}

export type LineItemTy = string | ITitleValueLineList[];

export interface IProps {
  LineList: LineItemTy[];
}

const TextLineList = ({ LineList }: IProps): JSX.Element => {
  return (
    <div>
      {LineList.map((item) => {
        return Array.isArray(item) ? (
          <TitleValueLineList list={item} />
        ) : (
          <OnlyValueLineItem value={item} />
        );
      })}
    </div>
  );
};

export default TextLineList;
