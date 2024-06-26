import { FC } from "react";
import { IBoardItemHeader as IHeader } from "../../../hooks/board/boardList";

export interface IProps extends IHeader {}

const ItemHeader: FC<IProps> = ({
  id,
  writer,
  title,
  createdAt,
  likes,
  unlikes,
  commentCnt,
  looks,
}) => {
  return (
    <div className="p-2 flex text-base text-center gap-y-2 max-sm:flex-col">
      <div className="flex grow max-sm:gap-x-2">
        <div className="p-2 min-w-24 border-r border-gray-400 truncate max-sm:border-r-0 max-sm:bg-blue-200 max-sm:rounded-xl max-sm:shadow">
          {writer}
        </div>
        <div className="relative grow">
          <div className="absolute top-0 w-full p-2 text-left border-r border-gray-400 truncate max-sm:border-0 max-sm:text-center max-sm:bg-gray-300 max-sm:shadow">
            {title}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2 min-w-28 border-r border-gray-400 truncate truncate max-sm:grow">
          {createdAt}
        </div>
        <div className="p-2 min-w-16 border-r border-gray-400 font-semibold truncate truncate max-sm:grow">
          <span className="hidden font-normal max-sm:inline">추천수 </span>
          {likes + unlikes}
        </div>
        <div className="p-2 min-w-16 border-r border-gray-400 font-semibold truncate truncate max-sm:grow">
          <span className="hidden font-normal max-sm:inline">댓글수 </span>
          {commentCnt}
        </div>
        <div className="p-2 min-w-16 font-semibold  truncate max-sm:grow">
          <span className="hidden font-normal max-sm:inline">조회수 </span>
          {looks}
        </div>
      </div>
    </div>
  );
};

export default ItemHeader;
