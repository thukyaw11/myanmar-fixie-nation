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
import ReactGA from 'react-ga4';


ReactGA.initialize("G-4BQH6P1JX5");

function App() {


  return (

    <div className="font-poppins bg-white dark:bg-[#0F172A]">
      <Header />
      <div className="container mx-auto md:px-0 px-4">
        <Landing />
        <Statistics />
        <Whoweare />
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
