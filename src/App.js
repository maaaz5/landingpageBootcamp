import "./App.css";
import MainSection from "./sections/MainSection";
import IndustrySection from "./sections/IndustrySection";
import WhoWeAreSection from "./sections/WhoWeAreSection";
import ClientSection from "./sections/ClientSection";
import OurTeam from "./sections/OurTeam";
import MakeAppoinementSection from "./sections/MakeAppoinementSection";
import Agency from "./sections/Agency";
import FooterSection from "./sections/FooterSection";
function App() {
  return (
    <div>
      <MainSection />
      <IndustrySection />
      <WhoWeAreSection />
      <ClientSection />
      <OurTeam />
      <MakeAppoinementSection />
      <Agency />
      <FooterSection />
    </div>
  );
}

export default App;
