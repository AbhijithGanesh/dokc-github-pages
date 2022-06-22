import * as React from "react";

const Footer = () => {
  return (
    <>
      <footer className="my-10  text-gray-400 font-semibold">
        <section className="grid lg:grid-cols-10 sm:grid-cols-1 md:grid-cols-1 gap-2">
          <section className="flex flex-auto bg-white justify-between lg:col-start-3 col-span-6 h-[0.2px] w-auto lg:text-lg md:px-4 sm: text-sm">
            <p>Copyrights reserved © {new Date().getFullYear()}</p>
            <p> Data on Kuberenetes Community </p>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
