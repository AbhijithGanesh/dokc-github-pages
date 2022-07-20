import * as React from "react";
import { FiExternalLink } from "react-icons/fi";

const LinkHolder = ({ text, link, icon }) => {
  return (
    <>
      <section className="grid grid-cols-4 my-2 p-2 lg:text-xl md:text-lg sm:text-sm font-regular border-2 rounded-lg border-white hover:text-black hover:text-2xl hover:bg-white hover:font-light hover:transform-gpu translate-y-2">
        <section className="cols-start-1 col-span-3 gap-2">
          <a href={link} target="__blank">
            {text}
          </a>
        </section>
        <section className="col-start-4 flex justify-end text-3xl hover:text-2xl">
          {icon}
        </section>
      </section>
    </>
  );
};

const Links = () => {
  return (
    <>
      <section className="py-4 px-3 grid lg:grid-cols-10 md:grid-cols-1 sm:grid-cols-1 sm:mx-4 gap-6">
        <section class="sm:col-start-1 lg:col-start-3 col-span-2">
          <section className="mx-2 text-white lg:text-3xl md:text-xl sm:text-lg font-bold hover:underline">
            Important Links
          </section>
        </section>
        <section class="sm:col-start-1 lg:col-start-3 col-span-6 md:px-6 lg:px-2">
          <section className="text-white">
            <LinkHolder
              text={"Explorer's world website"}
              link="https://explorersworlddok.gtsb.io/"
              icon={<FiExternalLink />}
            />
            <LinkHolder
              text={"Killercoda scenario"}
              link="https://killercoda.com/abhijith-ganesh/scenario/helm-kubernetes"
              icon={<FiExternalLink />}
            />

            <LinkHolder
              text={"Learning and Challenges Repository"}
              link="https://github.com/dokc/learning-and-challenges"
              icon={<FiExternalLink />}
            />
            <LinkHolder
              text={"Community Website"}
              link="https://dok.community"
              icon={<FiExternalLink />}
            />
            <LinkHolder
              text={"Community Landscape"}
              link="https://dok.community/landscape"
              icon={<FiExternalLink />}
            />
            <LinkHolder
              text={"Rap God API documentation"}
              link="https://dokc.github.io/docs-rap-god-api"
              icon={<FiExternalLink />}
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default Links;
