import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <HowItWorks />
      <Highlights />
      <Features />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
