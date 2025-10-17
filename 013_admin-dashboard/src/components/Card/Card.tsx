import { FC, ReactNode } from "react";
import "../../styles/Body/body.css";

interface CardProps {
  classname: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ classname, children }) => {
  return <div className={`${classname}`}>{children}</div>;
};

export default Card;
