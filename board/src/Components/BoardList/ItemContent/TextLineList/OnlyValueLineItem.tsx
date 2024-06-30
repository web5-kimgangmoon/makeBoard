interface IProps {
  value: string;
}

const OnlyValueLineItem = ({ value }: IProps): JSX.Element => {
  return (
    <div className="p-1 flex justify-center whitespace-pre-wrap break-all border-b-4 border-gray-300 border-double text-xl font-semibold">
      {value}
    </div>
  );
};

export default OnlyValueLineItem;
