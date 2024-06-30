interface IProps {
  title: string;
  isLong: boolean;
}

const NormalItem = ({ title, isLong }: IProps): JSX.Element => {
  return (
    <div
      className={`p-2  border-r border-gray-400 ${
        isLong ? "min-w-28" : "min-w-16"
      }`}
    >
      {title}
    </div>
  );
};

export default NormalItem;
