interface IProps {
  title: string;
}

const StretchItem = ({ title }: IProps): JSX.Element => {
  return (
    <div className="relative grow">
      <div className="absolute top-0 w-full p-2 text-left border-r border-gray-400">
        {title}
      </div>
    </div>
  );
};

export default StretchItem;
