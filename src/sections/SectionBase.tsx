import React, { ReactNode } from "react";
import SectionBorder from "../compontents/general/SectionBorder";
interface Props {
  children: ReactNode;
  name: string;
}
function SectionBase(props: Props) {
  return (
    <div>
      <SectionBorder text={props.name} repeat={25} />
      <div className="min-h-screen" id={props.name.toLowerCase()}>
        {props.children}
      </div>
    </div>
  );
}

export default SectionBase;
