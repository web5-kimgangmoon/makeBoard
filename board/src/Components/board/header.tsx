import Button from "../Button/Button";

export interface IProps {}

const Header = ({}: IProps): JSX.Element => {
  return (
    <div className="sticky bg-orange-400 top-0 z-20" id="header">
      <div className="container p-2 bg-orange-300 h-full rounded-2xl flex justify-end">
        <div className="flex">
          //나중에 Link를 추가하자
          <Button px={0} py={0} color={0} content="로그인"></Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
