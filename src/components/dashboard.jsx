import Hero from "./hero";
import HowTo from "./howTo";
import ResultSecurity from "./resultSecurity";
import Footer from "./footer";
import NavBar from "./navBar";

export default function Dashboard() {
  return (
    <>
      {/*Navigation Bar Section*/}
      <NavBar />

      {/*Hero Section*/}
      <Hero />

      {/*How To Use Section*/}
      <HowTo />

      {/*Result and Security Section*/}
      <ResultSecurity />

      {/*Footer Section*/}
      <Footer />
    </>
  );
}
