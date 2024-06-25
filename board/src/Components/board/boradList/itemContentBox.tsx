import { FC, ChangeEvent } from "react";
import ItemContent from "./itemContent";

export interface IProps {
  isOpen: boolean;
  isWriter: boolean;
  isUser: boolean;
  title: string;
  writer: string;
  createdAt: string;
  updatedAt: string;
  looks: number;
  content: string;
  likes: number;
  unlikes: number;
  openItemContent(): ChangeEvent<HTMLInputElement>;
  deleteItem(): void;
  //   checkScroll(): void;
  //   getBoardContent():void; 이것들을 포함하고 있어야한다.
  openCommentListModal(): void;
  openCommentWriteModal(): void;
  recommend(like: number): void;
}

const ItemContentBox: FC<IProps> = ({
  isOpen,
  isWriter,
  isUser,
  title,
  writer,
  createdAt,
  updatedAt,
  looks,
  content,
  likes,
  unlikes,
  openItemContent,
  deleteItem,
  openCommentListModal,
  openCommentWriteModal,
  recommend,
}) => {
  return (
    <div
      className="max-h-0 transition-[max-height] ease-in duration-300
has-[:checked]:max-h-[50rem] has-[:checked]:ease-out has-[:checked]:duration-500"
    >
      <input
        type="checkbox"
        checked={isOpen}
        onChange={openItemContent}
        className="absolute w-full h-full appearance-none top-0 left-0 cursor-pointer"
      />
      {isOpen ? (
        <ItemContent
          isWriter={isWriter}
          isUser={isUser}
          title={title}
          writer={writer}
          createdAt={createdAt}
          updatedAt={updatedAt}
          looks={looks}
          content={content}
          likes={likes}
          unlikes={unlikes}
          deleteItem={deleteItem}
          openCommentListModal={openCommentListModal}
          openCommentWriteModal={openCommentWriteModal}
          recommend={recommend}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ItemContentBox;
