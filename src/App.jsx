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
          {/* <Route path="/GoogleCalender" element={<GoogleCalender />} /> */}
          {/* <Route path="/GoogleTasks" element={<GoogleTasks />} /> */}
          {/* <Route path="/GoogleClassRoom" element={<GoogleClassRoom />} /> */}
          {/* <Route path="/GoogleClassroom2" element={<GoogleClassroom2 />} /> */}
          {/* <Route path="/DigitalFeedback" element={<DigitalFeedback />} /> */}
          {/* <Route path="/GoogleForms" element={<GoogleForms />} /> */}
          {/* <Route path="/StudentProgress" element={<StudentProgress />} /> */}
          {/* <Route path="/StudentGrowth" element={<StudentGrowth />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
