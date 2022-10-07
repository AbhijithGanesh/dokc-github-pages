import * as React from "react";
import { RiOpenSourceFill } from "react-icons/ri";
import image from "./../images/dokc-logo-white.svg";

let Guide = () => {
  return (
    <>
      <section className="pt-8 grid lg:grid-cols-10 sm:grid-cols-1 gap-6">
        <section className="sm:col-start-1 sm:justify-center lg:col-start-3 col-span-2">
          <section class="py-8 px-3">
            <img
              className="inline"
              src={image}
              alt="Data on Kubernetes community logo"
            />
          </section>
        </section>
        <section className="sm:col-start-1 lg:text-right lg:col-start-5 lg:col-span-4">
          <section className="px-3 text-white lg:text-4xl md:text-2xl sm:text-lg font-semibold capitalize hover:text-white">
            Welcome to the Data on Kubernetes Community!
            <section className="md:h-[0.5px] lg:h-[2px] w-auto bg-white  my-2" />
            <section className="text-white font-light normal-case lg:text-2xl md:text-xl sm:text-md hover:text-white">
              A place for learning and running databases and other stateful
              services on Kubernetes.
              <br />
            </section>
          </section>
        </section>
      </section>
      <section className="pt-8 grid lg:grid-cols-12">
        <section className="col-start-3 col-span-8">
          <section className="text-white font-bold text-4xl items-center">
            What is Open Source ?
          </section>
          <section className="pt-4 text-white font-regular text-xl">
            #How to get started? #What does it mean ? #Why should you ?
          </section>
        </section>
      </section>
    </>
  );
};

export default Guide;
