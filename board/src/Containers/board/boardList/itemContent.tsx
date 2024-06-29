import { FC, MouseEvent } from "react";
import ItemContentComp from "../../../Components/Board/BoardList/ItemContent/ItemContent";
import { IBoardItemContent as IContent } from "../../../hooks/Board/boardList";
import useBoardItemUserInfo from "../../../hooks/Board/boardItemUserInfo";
import getUserInfo from "../../../getInfo/getBoardItemUserInfo";

export interface IProps {
  item: IContent;
  isLong: boolean;
  isUnFold: boolean;
  unFoldBoardItem: () => void;
  selectLike(like: number): void;
  deleteBoard(): void;
}

const ItemContent: FC<IProps> = ({
  item,
  isUnFold,
  isLong,
  unFoldBoardItem,
  selectLike,
  deleteBoard,
}) => {
  const { setIsAlreadyLike, getBoardItemUserInfo } = useBoardItemUserInfo(
    getUserInfo()
  );
  const userInfo = getBoardItemUserInfo();
  const clickUnfold = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    unFoldBoardItem();
  };
  const clickDeleteItem = (e: MouseEvent<HTMLButtonElement>) => {
    if (userInfo.isWriter) {
      deleteBoard();
      console.log("삭제 체크");
    }
    // 삭제 요청을 서버로 보내자
  };
  const openCommentListModal = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("댓글 리스트 모달 체크");
  };
  const openCommentWriteModal = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("댓글 작성 모달 체크");
  };
  const clickLike = (e: MouseEvent<HTMLButtonElement>) => {
    if (!userInfo.isAlreadyLike) {
      selectLike(1);
      setIsAlreadyLike();
      console.log("추천 체크");
    }
    // 추천 요청을 서버로 보내자
  };
  const clickunLike = (e: MouseEvent<HTMLButtonElement>) => {
    if (!userInfo.isAlreadyLike) {
      selectLike(-1);
      setIsAlreadyLike();
      console.log("비추천 체크");
    }
    // 비추천 요청을 서버로 보내자
  };
  return (
    <ItemContentComp
      id={item.id}
      isLong={isLong}
      isUnFold={isUnFold}
      isWriter={userInfo.isWriter}
      isAlreadyLike={userInfo.isAlreadyLike}
      isUser={userInfo.isUser}
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
      clickUnFold={clickUnfold}
    />
  );
};

export default ItemContent;
