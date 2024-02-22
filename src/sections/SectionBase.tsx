import React, { ReactNode } from "react";
import SectionBorder, {
  BorderDirection,
} from "../compontents/general/SectionBorder";
interface Props {
  children: ReactNode;
  name: string;
  direction?: BorderDirection;
}
function SectionBase(props: Props) {
  return (
    <div className="">
      <SectionBorder
        text={props.name}
        repeat={60}
        direction={props.direction}
      />
      <div className="min-h-screen " id={props.name.toLowerCase()}>
        {props.children}
      </div>
    </div>
  );
}

export default SectionBase;
