interface IItem {
  title: string;
  value: string;
}

interface IProps {
  list: IItem[];
}

const TitleValueLineList = ({ list }: IProps): JSX.Element => {
  return (
    <div className="p-1 flex justify-between whitespace-pre-wrap break-all border-b-4 border-gray-300 border-double max-sm:flex-col">
      {list.map((item) => (
        <div>
          <strong>{item.title + " : "}</strong>
          {item.value}
        </div>
      ))}
    </div>
  );
};

export default TitleValueLineList;
