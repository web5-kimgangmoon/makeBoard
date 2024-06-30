import { Link } from "react-router-dom";
import Button, { IProps as IButton } from "./Button";

export interface IProps extends IButton {
  to: string;
}

const LinkButton = ({
  to,
  px,
  py,
  color,
  content,
  onClick,
  isDisabled,
}: IProps): JSX.Element => {
  return (
    <Link to={to}>
      <Button
        px={px}
        py={py}
        color={color}
        content={content}
        onClick={onClick}
        isDisabled={isDisabled}
      ></Button>
    </Link>
  );
};

export default LinkButton;
