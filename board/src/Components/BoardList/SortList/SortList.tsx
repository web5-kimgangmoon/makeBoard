import NormalItem from "./NormalItem";
import StretchItem from "./StretchItem";

interface IProps {
  titleList: Array<{ title: string; isStretch?: boolean; isLong?: boolean }>;
}

const SortList = ({ titleList }: IProps): JSX.Element => {
  return (
    <li className="bg-blue-100 shadow-sm overflow-y-hidden">
      <div className="p-2 flex text-base text-center max-sm:hidden last:border-r-0">
        {titleList.map((item) => {
          if (item["isStretch"]) return <StretchItem title={item["title"]} />;
          else
            return (
              <NormalItem
                title={item["title"]}
                isLong={item["isLong"] ? true : false}
              />
            );
        })}
      </div>
    </li>
  );
};

export default SortList;
