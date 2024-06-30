import { FC } from "react";
import { IBoardItemHeader as IHeader } from "../../../hooks/Board/BoardList";

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
          <div className="absolute top-0 w-full h-full p-2 text-left border-r border-gray-400 truncate max-sm:border-0 max-sm:text-center max-sm:bg-gray-300 max-sm:shadow">
            {title}
          </div>
        </div>
      </div>
      <div className="flex max-sm:flex-col">
        <div className="p-2 min-w-28 border-r border-gray-400 truncate max-sm:grow max-sm:border-r-0 font-semibold">
          <span className="hidden font-normal max-sm:inline">작성일자 </span>
          {createdAt}
        </div>
        <div className="flex max-sm:flex-col">
          <div className="flex border-gray-300 border-r border-gray-400 w-full max-sm:border-y max-sm:first:border-b-0 max-sm:border-r-0 last:border-r-0">
            <div className="flex px-2 py-2 min-w-16 border-r border-gray-400 max-sm:grow max-sm:border-r-0 max-sm:flex-col gap-y-1 justify-center last:border-r-0">
              <div className="hidden font-normal max-sm:block font-semibold">
                추천수
              </div>
              <div>{likes - unlikes}</div>
            </div>
            <div className="flex px-2 py-2 min-w-16 border-r border-gray-400 max-sm:grow max-sm:border-r-0 max-sm:flex-col gap-y-1 justify-center last:border-r-0">
              <div className="hidden font-normal max-sm:block font-semibold">
                댓글수
              </div>
              {commentCnt}
            </div>
            <div className="flex px-2 py-2 min-w-16 border-r border-gray-400 max-sm:grow max-sm:border-r-0 max-sm:flex-col gap-y-1 justify-center last:border-r-0">
              <div className="hidden font-normal max-sm:block font-semibold">
                조회수
              </div>
              {looks}
            </div>
          </div>
          <div className="flex border-gray-300 border-r border-gray-400  w-full max-sm:border-y max-sm:first:border-b-0 max-sm:border-r-0 last:border-r-0">
            <div className="flex px-2 py-2 min-w-16 border-r border-gray-400 max-sm:grow max-sm:border-r-0 max-sm:flex-col gap-y-1 justify-center last:border-r-0">
              <div className="hidden font-normal max-sm:block font-semibold">
                추천수
              </div>
              <div>{likes - unlikes}</div>
            </div>
            <div className="flex px-2 py-2 min-w-16 border-r border-gray-400 max-sm:grow max-sm:border-r-0 max-sm:flex-col gap-y-1 justify-center last:border-r-0">
              <div className="hidden font-normal max-sm:block font-semibold">
                댓글수
              </div>
              {commentCnt}
            </div>
            <div className="flex px-2 py-2 min-w-16 border-r border-gray-400 max-sm:grow max-sm:border-r-0 max-sm:flex-col gap-y-1 justify-center last:border-r-0">
              <div className="hidden font-normal max-sm:block font-semibold">
                조회수
              </div>
              {looks}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemHeader;
