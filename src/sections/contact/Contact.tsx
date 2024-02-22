import React from "react";
import SectionBase from "../SectionBase";
import { BorderDirection } from "../../compontents/general/SectionBorder";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
function Contact() {
  return (
    <SectionBase name="Contact" direction={BorderDirection.LEFT}>
      <div className="relative flex min-h-screen flex-col lg:flex-row items-center justify-center gap-10 p-4 text-center uppercase text-primary-950 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <ContactCard title="Email" linkText="fijalkowskim01@gmail.com">
            <MdEmail />
          </ContactCard>
          <ContactCard
            title="GitHub"
            link="https://github.com/Fijalkowskim"
            linkText="github.com/Fijalkowskim"
          >
            <FaGithub />
          </ContactCard>
          <ContactCard
            title="LinkedIn"
            link="https://www.linkedin.com/in/mateusz-fija%C5%82kowski-a880742b5/"
            linkText="linkedin.com/in/mateusz-fijałkowski"
          >
            <FaLinkedin />
          </ContactCard>
        </div>
        <ContactForm />
      </div>
    </SectionBase>
  );
}

export default Contact;
