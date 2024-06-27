import { FC, MouseEvent } from "react";
import { IBoardItemContent } from "../../../hooks/Board/boardList";
import { IBoardItemUserInfo as IUserInfo } from "../../../hooks/Board/boardItemUserInfo";

export interface IProps extends IBoardItemContent {}
export interface IProps extends IUserInfo {
  isUnFold: boolean;
  isLong: boolean;
  clickDeleteItem(e: MouseEvent<HTMLButtonElement>): void;
  //   checkScroll(): void;
  //   getBoardContent():void; 이것들을 포함하고 있어야한다.
  openCommentListModal(e: MouseEvent<HTMLButtonElement>): void;
  openCommentWriteModal(e: MouseEvent<HTMLButtonElement>): void;
  clickLike(e: MouseEvent<HTMLButtonElement>): void;
  clickUnLike(e: MouseEvent<HTMLButtonElement>): void;
  clickUnFold(e: MouseEvent<HTMLButtonElement>): void;
}

const ItemContent: FC<IProps> = ({
  id,
  isLong,
  isUnFold,
  isWriter,
  isUser,
  isAlreadyLike, // 비활성화 상태 표시를 위해 받아오자
  title,
  writer,
  createdAt,
  updatedAt,
  looks,
  content,
  likes,
  unlikes,
  clickDeleteItem,
  openCommentListModal,
  openCommentWriteModal,
  clickLike,
  clickUnLike,
  clickUnFold,
}) => {
  return (
    <div className="relative z-10">
      <div className="p-2">
        <div className="bg-white text-black shadow-lg rounded-sm">
          {isWriter ? (
            <div className="p-1 bg-blue-100 flex justify-end border-b-4 border-gray-300 border-double gap-x-2">
              {/* 링크 넣는 부분, 수정은 Link로 이동, 작성은 state를 이용해 요청보내기 */}
              {/* 작성자인지 여부도 확인한 다음에 아니면, 아예 작성자체를 그만둔다. */}
              <button
                className="px-2 py-1 bg-green-200 rounded-md shadow-md font-semibold text-green-700
hover:bg-green-300 focus:bg-green-500 focus:text-green-800 transition-[background]"
              >
                수정
              </button>
              <button
                type="button"
                className="px-2 py-1 bg-red-200 rounded-md shadow-md font-semibold text-red-700
hover:bg-red-300 focus:bg-red-500 focus:text-red-800 transition-[background]"
                onClick={clickDeleteItem}
              >
                삭제
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="p-1 flex justify-center whitespace-pre-wrap break-all border-b-4 border-gray-300 border-double">
            {title}
          </div>
          <div className="p-1 whitespace-pre-wrap break-all border-b">
            <strong>작성자 : </strong>
            {writer}
          </div>
          <div className="p-1 flex justify-between whitespace-pre-wrap break-all border-b-4 border-gray-300 border-double max-sm:flex-col">
            <div>
              <strong>작성일자 : </strong>
              {createdAt}
            </div>
            <div>
              <strong>수정일자 : </strong>
              {updatedAt}
            </div>
            <div>
              <strong>조회수 : </strong>
              {looks}
            </div>
          </div>
          <div
            className={`${
              isLong && isUnFold ? "" : "h-boardContentHeight"
            } border-b-4 border-gray-300 border-double whitespace-pre-wrap overflow-hidden relative`}
          >
            <span id={`${id}BoardItemContent`}>{content}</span>
            {isLong && !isUnFold ? (
              <div className="absolute w-full h-8 bottom-0 left-0 text-center bg-gray-200 border-t-2 border-gray-300">
                <button
                  type="button"
                  className="w-full h-full"
                  onClick={clickUnFold}
                >
                  전체보기
                </button>
              </div>
            ) : (
              ""
            )}
            {/* height를 구하는 함수가 필요, height에 따라서 해당 요소를 드러내주자. */}
          </div>
          <div className="p-1 bg-blue-100 flex justify-center gap-y-2 flex-col">
            <div className="flex justify-center gap-x-2">
              <button
                type="button"
                className="px-2 py-1 bg-blue-200 rounded-md shadow-md font-semibold text-blue-700
hover:bg-blue-300 focus:bg-blue-500 focus:text-blue-800 transition-[background] disabled:bg-blue-100" // disabled:bg-blue-800 disabled:text-blue-100
                disabled={isAlreadyLike}
                onClick={clickLike}
              >
                추천 <span>{likes}</span>
              </button>
              <button
                type="button"
                className="px-2 py-1 bg-red-200 rounded-md shadow-md font-semibold text-red-700
hover:bg-red-300 focus:bg-red-500 focus:text-red-800 transition-[background] disabled:bg-red-100" // disabled:bg-red-800 disabled:text-red-100
                disabled={isAlreadyLike}
                onClick={clickUnLike}
              >
                비추천 <span>{unlikes}</span>
              </button>
            </div>
            <div className="flex justify-center gap-x-2">
              <button
                type="button"
                className="px-2 py-1 bg-violet-200 rounded-md shadow-md font-semibold text-violet-700
hover:bg-violet-300 focus:bg-violet-500 focus:text-violet-800 transition-[background]"
                onClick={openCommentListModal}
              >
                전체댓글 확인
              </button>
              {isUser ? (
                <button
                  type="button"
                  className="px-2 py-1 bg-pink-200 rounded-md shadow-md font-semibold text-pink-700
hover:bg-pink-300 focus:bg-pink-500 focus:text-pink-800 transition-[background]"
                  onClick={openCommentWriteModal}
                >
                  댓글작성
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemContent;
