// import { FC } from "react";
// import ItemHeaderComp from "../../../Components/Board/BoardList/ItemHeader/Header";
// import { IBoardItemHeader as IHeader } from "../../../hooks/Board/boardList";

// export interface IProps {
//   item: IHeader;
// }

// const ItemHeader: FC<IProps> = ({ item }) => {
//   return (

//     <ItemHeaderComp
//       id={item.id}
//       writer={item.writer}
//       title={item.title}
//       createdAt={item.createdAt}
//       likes={item.likes}
//       unlikes={item.unlikes}
//       commentCnt={item.commentCnt}
//       looks={item.looks}
//     />
//   );
// };

// export default ItemHeader;
import ItemHeaderComp from "../../../Components/Board/BoardList/ItemHeader/Header";
import { IBoardItemHeader as IHeader } from "../../../hooks/Board/boardList";

export interface IProps {
  item: IHeader;
}

const ItemHeader = ({ item }: IProps): JSX.Element => {
  return (
    <ItemHeaderComp
      id={item.id}
      writer={item.writer}
      title={item.title}
      createdAt={item.createdAt}
      likes={item.likes}
      unlikes={item.unlikes}
      commentCnt={item.commentCnt}
      looks={item.looks}
    />
  );
};

export default ItemHeader;
