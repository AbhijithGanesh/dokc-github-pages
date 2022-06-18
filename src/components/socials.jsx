import * as React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { BsSlack, BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { RiYoutubeFill } from "react-icons/ri";

const Socials = () => {
  const IconStyle = {
    marginTop: "10px",
    marginLeft: "5px",
  };
  return (
    <>
      <section className="flex flex-auto justify-center">
        <section className="text-white">
          <section className="lg:text-3xl md:text-2xl sm:text-xl text-white hover:underline font-bold">
            Check out our Socials!
          </section>
        </section>
      </section>
      <section className=" flex flex-auto text-gray-400 justify-center lg:text-3xl md:text-2xl sm:text-xl gap-8 ">
        <a href="https://github.com/dokc/" target="__blank">
          <VscGithubAlt style={IconStyle} className="hover:text-white" />
        </a>
        <a href="https://twitter.com/dokcommunity/" target="__blank">
          <FiTwitter style={IconStyle} className="hover:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/company/data-on-kubernetes-community/"
          target="__blank"
        >
          <BsLinkedin style={IconStyle} className="hover:text-white" />
        </a>
        <a href="https://go.dok.community/slack" target="__blank">
          <BsSlack style={IconStyle} className="hover:text-white" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCUnXJbHQ89R2uSfKsqQwGvQ"
          target="__blank"
        >
          <RiYoutubeFill style={IconStyle} className="hover:text-white" />
        </a>
      </section>
    </>
  );
};

export default Socials;
