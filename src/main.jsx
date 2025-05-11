import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import './index.css'
// import { Routes, Route } from "react-router-dom";
// import Home from "../../components/Homepage/home";
// import About from "../../components/About/about";

// const Main = () => {
//   return (
//     <div id="main" className="mx-auto max-w-screen-lg">
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// };

// export default Main;
