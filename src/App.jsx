import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import BoostEfficiency from "./BoostEfficiency/BoostEfficiency";
import Explore from "./ExploreAdd-ons/Explore";
import GuardianInfo from "./GuardianInfo/GuardianInfo";
import GoogleTools from "./GoogleTools/GoogleTools";
import ManageMeeting from "./ManageMeeting/ManageMeeting";
import DigitalSyllabus from "./DigitalSyllabus/DigitalSyllabus";
import DigitalPortfolio from "./DigitalPortfolio/DigitalPortfolio";
import GoogleSlides from "./GoogleSlides/GoogleSlides";
import GoogleMeet from "./GoogleMeet/GoogleMeet";
import ShareOption from "./ShareOption/ShareOption";
import VisualizeLearning from "./VisualizeLearning/VisualizeLearning";
import PublishWork from "./PublishWork/PublishWork";
import BestPractices from "./BestPractices/BestPractices";
import Assessment from "./Assessment/Assessment";
import GoogleSheets from "./GoogleSheets/GoogleSheets";
import AnalyzeData from "./AnalyzeData/AnalyzeData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/BoosEfficiency" element={<BoostEfficiency />}></Route>
          <Route path="/ExploreAdd-ons" element={<Explore />}></Route>
          <Route path="/GuardianInfo" element={<GuardianInfo />} />
          <Route path="/GoogleTools" element={<GoogleTools />} />
          <Route path="/ManageMeeting" element={<ManageMeeting />} />
          <Route path="/DigitalSyllabus" element={<DigitalSyllabus />} />
          <Route path="/DigitalPortfolio" element={<DigitalPortfolio />} />
          <Route path="/GoogleSlides" element={<GoogleSlides />} />
          <Route path="/GoogleMeet" element={<GoogleMeet />} />
          <Route path="/ShareOption" element={<ShareOption />} />
          <Route path="/VisualizeLearning" element={<VisualizeLearning />} />
          <Route path="/PublishWork" element={<PublishWork />} />
          <Route path="/BestPractices" element={<BestPractices />} />
          <Route path="/Assessment" element={<Assessment />} />
          <Route path="/GoogleSheets" element={<GoogleSheets />} />
          <Route path="/AnalyzeData" element={<AnalyzeData />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
