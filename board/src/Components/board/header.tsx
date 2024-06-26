import { FC } from "react";

export interface IProps {}

const Header: FC<IProps> = ({}) => {
  return (
    <div className="sticky bg-orange-400 top-0 z-20" id="header">
      <div className="container p-2 bg-orange-300 h-full rounded-2xl flex justify-end min-w-[450px]">
        <div className="flex">
          <button //나중에 link로 수정할 부분
            className="px-5 py-3 bg-yellow-200 rounded-md shadow-md font-semibold text-yellow-700
        hover:bg-yellow-300 focus:bg-yellow-500 focus:text-yellow-800 transition-[background]"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
