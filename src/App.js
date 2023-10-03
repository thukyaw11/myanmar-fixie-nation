import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import "animate.css/animate.min.css";
import Statistics from "./components/Statistics";
import Whoweare from "./components/Whoweare";
import Activities from "./components/Activities";
import Team from "./components/Team";
import JoinUs from "./components/JoinUs";
import HocPage from "./components/HocPage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ReactGA from "react-ga4";
import { Helmet } from 'react-helmet'
import Media from "./components/Media";
// import DemoForm from "./components/DemoForm";

ReactGA.initialize("G-4BQH6P1JX5");

function App() {
  return (
    <div className="font-poppins bg-white dark:bg-[#0F172A]">
      <Helmet>
        <title>Myanmar Fixie Nation</title>
        <meta name="description" content="An official website of Myanmar Fixie Nation" />
        <meta name="keywords" content="myanmarfixienation, myanmarfixie, fixiemyanmar" />
        <meta name="author" content="Min Thu Kyaw" />
        <meta property="og:title" content="Myanmar Fixie Nation" />
        <meta property="og:description" content="An official website of Myanmar Fixie Nation" />
        <meta property="og:image" content="https://res.cloudinary.com/myanmar-fixie-nation/image/upload/v1692777832/MFN/stunt/stunt_9_zz07xc.jpg" />
        <meta property="og:url" content="https://myanmarfixienation.org" />
        <meta name="twitter:title" content="Myanmar Fixie Nation" />
        <meta name="twitter:description" content="An official website of Myanmar Fixie Nation" />
        <meta name="twitter:image" content="https://res.cloudinary.com/myanmar-fixie-nation/image/upload/v1692777832/MFN/stunt/stunt_9_zz07xc.jpg" />
        <meta name="twitter:card" content="myanmar_fixie_nation" />
      </Helmet>
      <Header />
      <div className="container mx-auto md:px-0 px-4">
        <Landing />
        {/* <DemoForm /> */}
        <Statistics />
        <Whoweare />
        <Media />
        <Activities />
        <Team />
        <JoinUs />
        <HocPage />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
export default App;
