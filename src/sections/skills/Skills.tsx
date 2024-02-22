import React, { useEffect, useRef } from "react";
import SectionBase from "../SectionBase";
import { BorderDirection } from "../../compontents/general/SectionBorder";
import SkillsGroup from "./SkillsGroup";
import { webSkills } from "./WebSkills";
import { otherSkills } from "./OtherSkills";

function Skills() {
  return (
    <SectionBase name="Skills" direction={BorderDirection.LEFT}>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-4 pt-20 sm:pt-4">
        <div className="px-4">
          <SkillsGroup header="Web development stack" skills={webSkills} />
        </div>
        <div className="w-full h-[0.1px] bg-primary-950/50" />
        <div className="px-4">
          <SkillsGroup header="Other techonologies" skills={otherSkills} />
        </div>
      </div>
    </SectionBase>
  );
}

export default Skills;
