import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './pages/Landing';
// import Navbar from "./components/common/Navbar";
// import Footer from "./components/common/footer";
function App() {

  return (
   <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Landing />}/>
      </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
