import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import "animate.css/animate.min.css";
import Statistics from "./components/Statistics";
import Whoweare from "./components/Whoweare";
import Activities from "./components/Activities";
import Team from "./components/Team";


function App() {


  return (
    <div className="font-poppins">
      <Header />
      <div className="container mx-auto md:px-0 px-4">
        <Landing />
        <Statistics />
        <Whoweare />
        <Activities />
        <Team />
      </div>
    </div>
  );
}

export default App;
