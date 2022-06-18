import * as React from "react";
import image from "../../images/dokc.png";

let LandingPage = () => {
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
          <section className="text-white lg:text-4xl md:text-2xl sm:text-lg font-bold capitalize hover:text-white">
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
    </>
  );
};

export default LandingPage;
