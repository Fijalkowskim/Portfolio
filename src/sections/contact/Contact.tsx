import React from "react";
import SectionBase from "../SectionBase";
import { BorderDirection } from "../../compontents/general/SectionBorder";
function Contact() {
  return (
    <SectionBase name="Contact" direction={BorderDirection.LEFT}>
      <div>Contact</div>
    </SectionBase>
  );
}

export default Contact;
