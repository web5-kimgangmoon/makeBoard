import { FC, MouseEvent } from "react";
import ItemContentComp from "../../../Components/board/boradList/itemContent";
import { IBoardItemContent as IContent } from "../../../hooks/board/boardList";

export interface IProps {
  item: IContent;
}

const ItemContent: FC<IProps> = ({ item }) => {
  const clickDeleteItem = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("삭제 체크");
  };
  const openCommentListModal = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("댓글 리스트 모달 체크");
  };
  const openCommentWriteModal = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("댓글 작성 모달 체크");
  };
  const clickLike = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("추천 체크");
  };
  const clickunLike = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("비추천 체크");
  };
  return (
    <ItemContentComp
      id={item.id}
      isWriter={item.isWriter}
      isUser={item.isUser}
      title={item.title}
      writer={item.writer}
      createdAt={item.createdAt}
      updatedAt={item.updatedAt}
      looks={item.looks}
      content={item.content}
      likes={item.likes}
      unlikes={item.unlikes}
      clickDeleteItem={clickDeleteItem}
      openCommentListModal={openCommentListModal}
      openCommentWriteModal={openCommentWriteModal}
      clickLike={clickLike}
      clickUnLike={clickunLike}
    />
  );
};

export default ItemContent;
