import * as React from "react";

const LinkHolder = ({ text, link }) => {
  return (
    <>
      <section className="my-2 p-2 lg:text-xl md:text-lg sm:text-sm font-regular border-2 rounded-lg border-white hover:text-black hover:text-2xl hover:bg-white hover:font-light">
        <a href={link} target="__blank">
          {text}
        </a>
      </section>
    </>
  );
};

const Links = () => {
  return (
    <>
      <section className="py-4 grid lg:grid-cols-10 md:grid-cols-1 sm:grid-cols-1 sm:mx-4 gap-6">
        <section class="sm:col-start-1 lg:col-start-3 col-span-2">
          <section className="mx-2 text-white lg:text-3xl md:text-xl sm:text-lg font-bold hover:underline">
            Important Links
          </section>
        </section>
        <section class="sm:col-start-1 lg:col-start-3 col-span-6 md:px-6 lg:px-2">
          <section className="text-white">
            <LinkHolder
              text={"Community Website"}
              link="https://dok.community"
            />
            <LinkHolder
              text={"Community Landscape"}
              link="https://dok.community/landscape"
            />
            <LinkHolder
              text={"Rap God API documentation"}
              link="https://dokc.github.io/docs-rap-god-api"
            />
            <LinkHolder
              text={"Challenges Repository"}
              link="https://dokc.github.io/dokc/learning-and-challenges"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default Links;
