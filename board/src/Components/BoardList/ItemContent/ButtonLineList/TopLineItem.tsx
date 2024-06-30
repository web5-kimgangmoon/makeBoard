import Button from "../../../Button/Button";
import LinkButton from "../../../Button/LinkButton";
import { IButtonEx } from "./TopLineList";

interface IProps {
  BtnList: IButtonEx[];
}

const TopLineItem = ({ BtnList }: IProps): JSX.Element => {
  return (
    <div className="p-1 flex justify-end gap-x-2">
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

{
  /* 링크 넣는 부분, 수정은 Link로 이동, 작성은 state를 이용해 요청보내기 */
}
{
  /* 작성자인지 여부도 확인한 다음에 아니면, 아예 작성자체를 그만둔다. */
}

{
  /* <div className="p-1 bg-blue-100 flex justify-end gap-x-2">
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
</div>; */
}

export default TopLineItem;
