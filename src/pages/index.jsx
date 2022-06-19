import * as React from "react";
import LandingPage from "../components/main/main";
import Links from "../components/main/links";
import Socials from "../components/socials";
import Footer from "../components/footer";

// styles

// markup
const IndexPage = () => {
  return (
    <section>
      <LandingPage />
      <Links />
      <Socials />
      <Footer />
    </section>
  );
};

export default IndexPage;
