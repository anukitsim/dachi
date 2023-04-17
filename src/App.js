import Home from "./components/home/home.component";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact/contact.component";
import Cv from "./components/cv/cv.component";
import Witness from "./components/witness/witness.component";
import InsasiveModification from "./components/invasive-modification/insasive-modification.component";
import Steps from "./components/steps/steps.component";
import Hyphen from "./components/hyphen/Hyphen.component";
import Protection from "./components/protection/protection.component";
import FrenchLessons from "./components/french-lessons/french-lessons.component";
import PinkTrash from "./components/pink-trash/pink-trash.component";
import Bulbosa from "./components/Bulbosa/Bulbosa.component";
import Tide from "./components/Tide/Tide.component";
import LuceSide from "./components/in-luce-side/in-luce-side.component";
import PSR from './components/psr/psr.component';
import BarbedWire from './components/barbed-wire/barbed-wire.component';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="contact" element={<Contact />} />
          <Route path="cv" element={<Cv />} />
          <Route path="thewitness" element={<Witness />} />
          <Route path="invasive-modification" element={<InsasiveModification />} />
          <Route path="STEPS" element={<Steps />} />
          <Route path="hyphen" element={<Hyphen />} />
          <Route path="i-need-protection" element={<Protection />} />
          <Route path="french-lessons" element={<FrenchLessons />} />
          <Route path="kidsofthepinktrash" element={<PinkTrash />} />
          <Route path="bulbosa" element={<Bulbosa />} />
          <Route path="tide" element={<Tide />} />
          <Route path="in-luce-side" element={<LuceSide />} />
          <Route path="psr" element={<PSR />} />
          <Route path="barbed-wire" element={<BarbedWire />} />
        </Route>
        
      </Routes>
    </div>
  );
};

export default App;
