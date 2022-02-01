import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Pricing from "./pages/Pricing";
import Apply from "./pages/Apply";

import Clusters from "./components/Clusters";
import Events from "./components/Events";
import Gez from "./components/Gez";
import GovernmentPolicy from "./components/GovernmentPolicy";
import HowToApply from "./components/HowToApply";
import Incentives from "./components/Incentives";
import Kaduna from "./components/Kaduna";
import News from "./components/News";
import ParkAmenities from "./components/ParkAmenities";
import Partners from "./components/Partners";
import TalkWithExpert from "./components/TalkWithExpert";
import TermsAndConditions from "./components/TermsAndConditions";
import WhyInvest from "./components/WhyInvest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/clusters" element={<Clusters />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gez-the-project" element={<Gez />} />
        <Route path="/government-policy" element={<GovernmentPolicy />} />
        <Route path="/how-to-apply" element={<HowToApply />} />
        <Route path="/incentives" element={<Incentives />} />
        <Route path="/kaduna" element={<Kaduna />} />
        <Route path="/news" element={<News />} />
        <Route path="/park-amenities" element={<ParkAmenities />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/talk-with-expert" element={<TalkWithExpert />} />
        <Route path="/Terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/investments" element={<WhyInvest />} />
      </Routes>
    </Router>
  );
}

export default App;
