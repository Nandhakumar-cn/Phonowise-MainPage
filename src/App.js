import React from "react";
import MyAccount from "./My-Account/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Faq from "./pages/Faq";
import Editprofile from "./pages/Editprofile.js";
import Referral from "./pages/Referral";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MyAccount />} index />
        </Routes>
        <Routes>
          <Route path="/Editprofile" element={<Editprofile />} />
        </Routes>
        <Routes>
          <Route path="/Faq" element={<Faq />} />
        </Routes>
        <Routes>
          <Route path="/Referral" element={<Referral />} />
        </Routes>
        <Routes>
          <Route path="/Settings" element={<Settings />} />
        </Routes>
        <Routes>
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}
// }
export default App;
