import "./index.css";
import Dashboard from "./components/dashboard";
import { Routes, Route } from "react-router-dom";
import Facebook from "./pages/facebook";
import Instagram from "./pages/instagram";
import Tiktok from "./pages/tiktok";
import Twitter from "./pages/twitter";

function App() {
  return (
    <>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Dashboard />} />

        {/* Tool Pages */}
        <Route path="/facebook-tool" element={<Facebook />} />
        <Route path="/instagram-tool" element={<Instagram />} />
        <Route path="/tiktok-tool" element={<Tiktok />} />
        <Route path="/twitter-tool" element={<Twitter />} />
      </Routes>
    </>
  );
}

export default App;
