import { FC, ChangeEvent } from "react";
import ItemContent from "../../../Containers/board/boardList/itemContent";
import { IBoardItemContent as IContent } from "../../../hooks/board/boardList";

export interface IProps {
  boardItemContent: IContent;
  openItemContent: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ItemContentBox: FC<IProps> = ({ boardItemContent, openItemContent }) => {
  return (
    <div
      className="max-h-0 transition-[max-height] ease-in duration-300
has-[:checked]:max-h-[50rem] has-[:checked]:ease-out has-[:checked]:duration-500"
    >
      <input
        type="checkbox"
        checked={boardItemContent.isOpen}
        onChange={openItemContent}
        className="absolute w-full h-full appearance-none top-0 left-0 cursor-pointer"
      />
      <ItemContent item={boardItemContent} />
    </div>
  );
};

export default ItemContentBox;
