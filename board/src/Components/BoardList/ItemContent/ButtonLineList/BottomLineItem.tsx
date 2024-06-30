import Button from "../../../Button/Button";
import LinkButton from "../../../Button/LinkButton";
import { IButtonEx } from "./BottomLineList";

interface IProps {
  BtnList: IButtonEx[];
}

const BottomLineItem = ({ BtnList }: IProps): JSX.Element => {
  return (
    <div className="flex justify-center gap-x-2">
      {BtnList.map((item) => {
        if (item.isExists === false) return "";
        return item.isLink ? (
          <LinkButton
            px={item.px}
            py={item.py}
            color={item.color}
            content={item.content}
            onClick={item.onClick}
            isDisabled={item.isDisabled}
            to={item.to ? item.to : ""}
          />
        ) : (
          <Button
            px={item.px}
            py={item.py}
            color={item.color}
            content={item.content}
            onClick={item.onClick}
            isDisabled={item.isDisabled}
          />
        );
      })}
    </div>
  );
};

export default BottomLineItem;
// const BottomLineItem = ():JSX.Element =>{
// <div className="flex justify-center gap-x-2">
//   <button
//     type="button"
//     className="px-2 py-1 bg-blue-200 rounded-md shadow-md font-semibold text-blue-700
// hover:bg-blue-300 focus:bg-blue-500 focus:text-blue-800 transition-[background] disabled:bg-blue-100" // disabled:bg-blue-800 disabled:text-blue-100
//     disabled={isAlreadyLike}
//     onClick={clickLike}
//   >
//     추천 <span>{likes}</span>
//   </button>
//   <button
//     type="button"
//     className="px-2 py-1 bg-red-200 rounded-md shadow-md font-semibold text-red-700
// hover:bg-red-300 focus:bg-red-500 focus:text-red-800 transition-[background] disabled:bg-red-100" // disabled:bg-red-800 disabled:text-red-100
//     disabled={isAlreadyLike}
//     onClick={clickUnLike}
//   >
//     비추천 <span>{unlikes}</span>
//   </button>
// </div>

// <div className="flex justify-center gap-x-2">
//   <button
//     type="button"
//     className="px-2 py-1 bg-violet-200 rounded-md shadow-md font-semibold text-violet-700
// hover:bg-violet-300 focus:bg-violet-500 focus:text-violet-800 transition-[background]"
//     onClick={openCommentListModal}
//   >
//     전체댓글 확인
//   </button>
//   {isUser ? (
//     <button
//       type="button"
//       className="px-2 py-1 bg-pink-200 rounded-md shadow-md font-semibold text-pink-700
// hover:bg-pink-300 focus:bg-pink-500 focus:text-pink-800 transition-[background]"
//       onClick={openCommentWriteModal}
//     >
//       댓글작성
//     </button>
//   ) : (
//     ""
//   )}
// </div>
// }
