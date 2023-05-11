import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from "./pages/projects";
import Home from "./pages/home";

const App = () => (
  <BrowserRouter>
  
        <Routes>
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/" element={<Home/>} />
          </Routes>
     
  </BrowserRouter>
);

export default App;