import * as React from "react";

const Footer = () => {
  const date = Date.now();

  return (
    <>
      <footer className="my-10  text-gray-400 font-semibold">
        <section className="grid grid-cols-10 gap-2">
          <section className="flex flex-auto col-start-3 col-span-6 h-[0.2px] w-auto text-lg bg-white justify-between">
            <p>Copyrights reserved © {new Date().getFullYear()}</p>
            <p> Data on Kuberenetes Community </p>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
