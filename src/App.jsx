import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DomainGrid from "./components/DomainGrid";
import DomainDetail from "./components/DomainDetail";
import Compare from "./components/Compare";
import Quiz from "./components/Quiz";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("home");
  const [domain, setDomain] = useState(null);

  const nav = (p) => {
    setPage(p);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Navbar page={page} nav={nav} />

      {page === "home" && (
        <>
          <Hero nav={nav} />
          <DomainGrid nav={nav} setDomain={setDomain} />
        </>
      )}

      {page === "domains" && (
        <DomainGrid nav={nav} setDomain={setDomain} />
      )}

      {page === "detail" && domain && (
        <DomainDetail domain={domain} nav={nav} />
      )}

      {page === "compare" && <Compare />}
      {page === "quiz" && <Quiz nav={nav} setDomain={setDomain} />}
      {page === "about" && <About />}

      <Footer nav={nav} />
    </>
  );
}